import { Controller, Post, UseInterceptors, UploadedFile, Get, Param, Delete } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ArchivosService } from './archivos.service'; 
import { Express } from 'express';
import { diskStorage } from 'multer'; // Importar diskStorage para configuración personalizada
import * as path from 'path';

@Controller('archivos')
export class ArchivosController {
  constructor(private readonly archivosService: ArchivosService) {}

  @Post('subir')
  @UseInterceptors(FileInterceptor('archivo', {
    storage: diskStorage({
      // Especificamos el destino de los archivos y la forma de nombrarlos
      destination: './uploads', // Ruta donde los archivos serán almacenados
      filename: (req, file, cb) => {
        const filename = `${Date.now()}-${file.originalname}`; // Renombramos el archivo con un timestamp para evitar conflictos
        cb(null, filename); // El nuevo nombre de archivo es el que se usará
      },
    }),
  }))
  async subirArchivo(@UploadedFile() file: Express.Multer.File) {
    console.log('Archivo recibido:', {
      originalname: file.originalname,
      filename: file.filename,
      path: file.path,
    }); // Log de depuración

    try {
      return await this.archivosService.guardarArchivo(file);
    } catch (error) {
      console.error('Error al guardar el archivo:', error.message);
      throw new Error(`Error al guardar el archivo: ${error.message}`);
    }
  }

  @Get()
  async listarArchivos() {
    return this.archivosService.listarArchivos();
  }

  @Get(':filename')
  obtenerArchivo(@Param('filename') filename: string) {
    return this.archivosService.obtenerArchivo(filename);
  }

  @Delete(':id')
  eliminarArchivo(@Param('id') id: string) {
    return this.archivosService.eliminarArchivo(id);
  }
}
