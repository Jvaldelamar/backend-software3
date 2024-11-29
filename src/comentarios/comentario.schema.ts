import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Comentario extends Document {
  @Prop()
  archivoId: string;

  @Prop()
  comentario: string;

  @Prop()
  autor: string;
}

export const ComentarioSchema = SchemaFactory.createForClass(Comentario);
