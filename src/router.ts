import { Router } from "express";
import { body } from "express-validator";
import { handlenInputErrors } from "./middleware/validation";
import { GamesController } from "./controller/GamesController";

const rutas = Router()

rutas.post(
    "/agg-juego",
    body("nombre").notEmpty().withMessage("El nombre es obligatorio"),
    body("plataforma").notEmpty().withMessage("La plataforma es obligatoria"),
    body("tamaño").notEmpty().withMessage("El tamaño es obligatorio"),
    body("imagen").notEmpty().withMessage("La imagen es obligatoria"),
    body("trailer").notEmpty().withMessage("El trailer es obligatorio"),
    body("descripcion").notEmpty().withMessage("La descripción es obligatoria"),
    body("archivo").notEmpty().withMessage("El archivo es obligatoria"),
    handlenInputErrors,
    GamesController.aggGames
)

rutas.get('/' ,GamesController.getGamesAll)
rutas.get('/:id' ,GamesController.getGamesById)

export default rutas