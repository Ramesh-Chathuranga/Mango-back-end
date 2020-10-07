import express, { Request, Response, NextFunction } from "express";
import usersReop from "../repository/usersReop";

const usersDispatcher = express.Router();
usersDispatcher.route("").get(async (req: Request, res: Response) => {
  try {
    const data = await usersReop.getAllUsers();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

usersDispatcher.route("/:type?").post(async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const data = await usersReop.getUsersListBySearchingValue(body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error);
  }
});
export default usersDispatcher;
