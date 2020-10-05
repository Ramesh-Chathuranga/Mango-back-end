import express from "express";
import cors from "cors";
import userDispatcher from "./userDispatcher";
import hotelDispatcher from "./hotelDispatcher";
import roomDispatcher from "./roomDispatcher";
import bookingDispatcher from "./bookingDispatcher";
import usersDispatcher from "./userDispatcherNew";
import morgan from "morgan";

const mainDispatcher = express.Router();
mainDispatcher.use(cors());
mainDispatcher.use(morgan("dev"));
mainDispatcher.use(express.json());
mainDispatcher.use("/api/v1/user", userDispatcher);
mainDispatcher.use("/api/v1/hotel", hotelDispatcher);
mainDispatcher.use("/api/v1/room", roomDispatcher);
mainDispatcher.use("/api/v1/booking", bookingDispatcher);
mainDispatcher.use("/api/v1/users", usersDispatcher);
export default mainDispatcher;
