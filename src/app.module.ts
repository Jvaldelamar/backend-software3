import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NuevoModule } from './nuevo/nuevo.module';
import { VehiculosModule } from './vehiculos/vehiculos.module';
import { PruebaModule } from './prueba/prueba.module';
import { ArchivosModule } from './archivos/archivos.module';
import { ComentariosModule } from './comentarios/comentarios.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://galeanofabio055:12345qwert@fabiogs05.xrpso49.mongodb.net/prueba?retryWrites=true&w=majority&appName=FabioGS05'), 
    NuevoModule,
    VehiculosModule,
    PruebaModule,
    ArchivosModule,
    ComentariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

