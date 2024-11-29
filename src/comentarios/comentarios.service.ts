import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comentario } from './comentario.schema';
import { CreateComentarioDto } from './dto/create-comentario.dto';

@Injectable()
export class ComentariosService {
  constructor(
    @InjectModel(Comentario.name) private comentarioModel: Model<Comentario>,
  ) {}

  async crearComentario(createComentarioDto: CreateComentarioDto): Promise<Comentario> {
    const comentario = new this.comentarioModel(createComentarioDto);
    return comentario.save();
  }

  async obtenerComentariosPorArchivo(archivoId: string): Promise<Comentario[]> {
    return this.comentarioModel.find({ archivoId }).exec();
  }
}
