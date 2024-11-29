import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; // Necesitas importar MongooseModule
import { ComentariosService } from './comentarios.service';
import { ComentariosController } from './comentarios.controller';
import { Comentario, ComentarioSchema } from './comentario.schema'; // Importar el modelo y su esquema

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Comentario.name, schema: ComentarioSchema }]), // Registra el modelo aquí
  ],
  controllers: [ComentariosController],
  providers: [ComentariosService],
})
export class ComentariosModule {}
