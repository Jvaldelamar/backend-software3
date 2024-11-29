import { ComentariosService } from './comentarios.service';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { Comentario } from './comentario.schema';
export declare class ComentariosController {
    private readonly comentariosService;
    constructor(comentariosService: ComentariosService);
    crearComentario(createComentarioDto: CreateComentarioDto): Promise<Comentario>;
    obtenerComentariosPorArchivo(archivoId: string): Promise<Comentario[]>;
}
