import { Module } from '@nestjs/common';
import { ArchivosService } from './archivos.service';
import { ArchivosController } from './archivos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Archivo, ArchivoSchema } from './archivo.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Archivo.name, schema: ArchivoSchema }])],
  providers: [ArchivosService],
  controllers: [ArchivosController],
})
export class ArchivosModule {}

