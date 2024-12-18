import type { NextFunction, Request, Response } from "express"
import Games from "../models/Games.model"

export class GamesController {
  
  static aggGames = async (req: Request, res: Response) => {
    try {
      const games = new Games(req.body);
      await games.save();
      res.status(201).json({ message: "Juego creado correctamente", data: games });
    } catch (error) {
      res.status(500).json({ message: "Error al obtener el juego", error });
    }
  }

  static getGamesAll = async (req: Request, res: Response) => {
    try {
      const games = await Games.findAll(req.body)
      res.status(200).json(games)
    } catch (error) {
      res.status(500).json({ message: "Error al obtener el juego", error });
    }
  }

  static getGamesById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const games = await Games.findByPk(id)

      if (!games) {
        const error = new Error("Juego no encontrado");
        res.status(404).json({ error: error.message });
      }

      res.status(200).json(games)
    } catch (error) {
      res.status(500).json({ message: "Error al obtener el juego", error });
    }
  }
}