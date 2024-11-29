import { PruebaService } from './prueba.service';
export declare class PruebaController {
    private readonly pruebaService;
    constructor(pruebaService: PruebaService);
    crearPrueba(body: {
        nombre: string;
        edad: number;
    }): Promise<import("./prueba.shema").Prueba>;
    obtenerPruebas(): Promise<import("./prueba.shema").Prueba[]>;
}
