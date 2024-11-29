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
exports.PruebaService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const prueba_shema_1 = require("./prueba.shema");
let PruebaService = class PruebaService {
    constructor(pruebaModel) {
        this.pruebaModel = pruebaModel;
    }
    async crearPrueba(data) {
        const nuevaPrueba = new this.pruebaModel(data);
        return nuevaPrueba.save();
    }
    async obtenerPruebas() {
        return this.pruebaModel.find({}, { nombre: 1, edad: 1, _id: 0 }).exec();
    }
};
exports.PruebaService = PruebaService;
exports.PruebaService = PruebaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(prueba_shema_1.Prueba.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PruebaService);
//# sourceMappingURL=prueba.service.js.map