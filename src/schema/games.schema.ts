import z from "zod"

const gameSchema = z.object({
    nombre: z.string().nonempty("El nombre es obligatorio"),
    plataforma: z.string().nonempty("La plataforma es obligatoria"),
    tamaño: z.string().nonempty("El tamaño es obligatorio"),
    imagen: z.string().url("La imagen debe ser una URL válida"),
    trailer: z.string().url("El trailer debe ser una URL válida"),
    descripcion: z.string().nonempty("La descripción es obligatoria"),
    archivo: z.string().nonempty("El archivo es obligatoria"),
});

export default gameSchema