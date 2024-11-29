import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ComentariosService } from './comentarios.service';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { Comentario } from './comentario.schema';

@Controller('comentarios')
export class ComentariosController {
  constructor(private readonly comentariosService: ComentariosService) {}

  @Post()
  async crearComentario(@Body() createComentarioDto: CreateComentarioDto): Promise<Comentario> {
    return this.comentariosService.crearComentario(createComentarioDto);
  }

  @Get(':archivoId')
  async obtenerComentariosPorArchivo(@Param('archivoId') archivoId: string): Promise<Comentario[]> {
    return this.comentariosService.obtenerComentariosPorArchivo(archivoId);
  }
}
