import express, { Request, Response, NextFunction } from "express";
import RoomRepository from "../repository/roomRepository";

const roomDispatcher = express.Router();
roomDispatcher.route("").get(async (req: Request, res: Response) => {
  try {
    const data = await RoomRepository.getRoomList();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

roomDispatcher
  .route("/:id")

  .get(async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const data = await RoomRepository.getRoom(id);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  });

export default roomDispatcher;
