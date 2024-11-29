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
exports.ArchivosController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const archivos_service_1 = require("./archivos.service");
const multer_1 = require("multer");
let ArchivosController = class ArchivosController {
    constructor(archivosService) {
        this.archivosService = archivosService;
    }
    async subirArchivo(file) {
        console.log('Archivo recibido:', {
            originalname: file.originalname,
            filename: file.filename,
            path: file.path,
        });
        try {
            return await this.archivosService.guardarArchivo(file);
        }
        catch (error) {
            console.error('Error al guardar el archivo:', error.message);
            throw new Error(`Error al guardar el archivo: ${error.message}`);
        }
    }
    async listarArchivos() {
        return this.archivosService.listarArchivos();
    }
    obtenerArchivo(filename) {
        return this.archivosService.obtenerArchivo(filename);
    }
    eliminarArchivo(id) {
        return this.archivosService.eliminarArchivo(id);
    }
};
exports.ArchivosController = ArchivosController;
__decorate([
    (0, common_1.Post)('subir'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('archivo', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                const filename = `${Date.now()}-${file.originalname}`;
                cb(null, filename);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArchivosController.prototype, "subirArchivo", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArchivosController.prototype, "listarArchivos", null);
__decorate([
    (0, common_1.Get)(':filename'),
    __param(0, (0, common_1.Param)('filename')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArchivosController.prototype, "obtenerArchivo", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArchivosController.prototype, "eliminarArchivo", null);
exports.ArchivosController = ArchivosController = __decorate([
    (0, common_1.Controller)('archivos'),
    __metadata("design:paramtypes", [archivos_service_1.ArchivosService])
], ArchivosController);
//# sourceMappingURL=archivos.controller.js.map