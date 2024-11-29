import { Injectable } from '@nestjs/common';
import * as fs from 'fs'; // Importamos fs para operaciones con el sistema de archivos
import * as path from 'path';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Archivo } from './archivo.schema';
import { Express } from 'express';

@Injectable()
export class ArchivosService {
  private uploadPath = path.resolve('uploads'); // Ruta donde se guardan los archivos

  constructor(@InjectModel(Archivo.name) private archivoModel: Model<Archivo>) {}

  async guardarArchivo(file: Express.Multer.File) {
    // Validar que el archivo tenga los datos requeridos
    if (!file || !file.filename) {
      throw new Error('Archivo no válido');
    }

    // Guardar información del archivo en MongoDB
    const nuevoArchivo = new this.archivoModel({
      filename: file.filename,       // Nombre del archivo guardado
      originalName: file.originalname, // Nombre original
      mimetype: file.mimetype,       // Tipo MIME
      size: file.size,               // Tamaño del archivo
      path: path.join(this.uploadPath, file.filename), // Ruta absoluta
    });

    return nuevoArchivo.save();
  }

  async obtenerArchivo(filename: string) {
    const file = await this.archivoModel.findOne({ filename });
    if (!file) {
      throw new Error('Archivo no encontrado');
    }

    const filePath = path.join(this.uploadPath, filename);
    if (!fs.existsSync(filePath)) {
      throw new Error('Archivo no encontrado en el sistema de archivos');
    }

    return fs.createReadStream(filePath); // Creamos un stream del archivo para la descarga
  }

  async eliminarArchivo(id: string) {
    const archivo = await this.archivoModel.findByIdAndDelete(id);
    if (!archivo) {
      throw new Error('Archivo no encontrado en la base de datos');
    }

    const filePath = path.join(this.uploadPath, archivo.filename);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath); // Elimina el archivo del sistema de archivos
    }

    return archivo; // Retorna la información del archivo eliminado
  }

  async listarArchivos() {
    return this.archivoModel.find().exec();
  }
}


