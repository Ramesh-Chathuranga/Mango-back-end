"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import HotelRepository from "../repository/hotelRepository";
const bookingRepository_1 = __importDefault(require("../repository/bookingRepository"));
const hotelDispatcher = express_1.default.Router();
hotelDispatcher
    .route("")
    .get(async (req, res) => {
    try {
        // const data = await HotelRepository.getHotelList();
        res.status(200).json("data");
    }
    catch (error) {
        res.status(500).send(error);
    }
})
    .post(async (req, res) => {
    try {
        const data = await bookingRepository_1.default.findDocument("checkInTimeStamp", req.body.timeValue);
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
hotelDispatcher
    .route("/:id")
    .get(async (req, res) => {
    try {
        const id = req.params.id;
        //const data = await HotelRepository.getHotel(id);
        res.status(200).json("data");
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.default = hotelDispatcher;
