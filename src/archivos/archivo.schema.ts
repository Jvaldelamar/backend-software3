import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Archivo extends Document {
  @Prop()
  filename: string;

  @Prop()
  originalName: string;

  @Prop()
  mimetype: string;

  @Prop()
  size: number;
}

export const ArchivoSchema = SchemaFactory.createForClass(Archivo);
