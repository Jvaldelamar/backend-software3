"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArchivosService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const archivo_schema_1 = require("./archivo.schema");
let ArchivosService = class ArchivosService {
    constructor(archivoModel) {
        this.archivoModel = archivoModel;
        this.uploadPath = path.resolve('uploads');
    }
    async guardarArchivo(file) {
        if (!file || !file.filename) {
            throw new Error('Archivo no válido');
        }
        const nuevoArchivo = new this.archivoModel({
            filename: file.filename,
            originalName: file.originalname,
            mimetype: file.mimetype,
            size: file.size,
            path: path.join(this.uploadPath, file.filename),
        });
        return nuevoArchivo.save();
    }
    async obtenerArchivo(filename) {
        const file = await this.archivoModel.findOne({ filename });
        if (!file) {
            throw new Error('Archivo no encontrado');
        }
        const filePath = path.join(this.uploadPath, filename);
        if (!fs.existsSync(filePath)) {
            throw new Error('Archivo no encontrado en el sistema de archivos');
        }
        return fs.createReadStream(filePath);
    }
    async eliminarArchivo(id) {
        const archivo = await this.archivoModel.findByIdAndDelete(id);
        if (!archivo) {
            throw new Error('Archivo no encontrado en la base de datos');
        }
        const filePath = path.join(this.uploadPath, archivo.filename);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
        return archivo;
    }
    async listarArchivos() {
        return this.archivoModel.find().exec();
    }
};
exports.ArchivosService = ArchivosService;
exports.ArchivosService = ArchivosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(archivo_schema_1.Archivo.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ArchivosService);
//# sourceMappingURL=archivos.service.js.map