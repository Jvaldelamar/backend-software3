/// <reference types="multer" />
/// <reference types="node" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import * as fs from 'fs';
import { Model } from 'mongoose';
import { Archivo } from './archivo.schema';
export declare class ArchivosService {
    private archivoModel;
    private uploadPath;
    constructor(archivoModel: Model<Archivo>);
    guardarArchivo(file: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, Archivo> & Archivo & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    obtenerArchivo(filename: string): Promise<fs.ReadStream>;
    eliminarArchivo(id: string): Promise<import("mongoose").Document<unknown, {}, Archivo> & Archivo & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    listarArchivos(): Promise<(import("mongoose").Document<unknown, {}, Archivo> & Archivo & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
}
