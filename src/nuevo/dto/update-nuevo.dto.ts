import { PartialType } from '@nestjs/mapped-types';
import { CreateNuevoDto } from './create-nuevo.dto';

export class UpdateNuevoDto extends PartialType(CreateNuevoDto) {}
