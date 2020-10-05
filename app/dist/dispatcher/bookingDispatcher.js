"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookingRepository_1 = __importDefault(require("../repository/bookingRepository"));
const bookingDispatcher = express_1.default.Router();
bookingDispatcher.route("")
    .get(async (req, res) => {
    try {
        const data = await bookingRepository_1.default.getAllBooking();
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
})
    .post(async (req, res) => {
    try {
        console.info("working");
        const data = await bookingRepository_1.default.createBooking(req.body);
        res.status(200).json(data);
    }
    catch (error) {
        res.status(200).send(error);
    }
})
    .delete(async (req, res) => {
    try {
        console.log("llll", req.body.id);
        //const data = await BookingRepository.getBooking(req.body.id); 
        const data = await bookingRepository_1.default.deleteBooking(req.body.id);
        res.status(204).send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
bookingDispatcher.route("/:id")
    .get(async (req, res) => {
    try {
        const id = req.params.id;
        console.log("lll", id);
        const data = await bookingRepository_1.default.getBooking(id);
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
})
    .put(async (req, res) => {
    try {
        const body = req.body;
        if (body.id !== req.params.id) {
            res.status(400).send("invalid Request Body");
            return;
        }
        const data = await bookingRepository_1.default.updateData(body, req.params.id);
        res.status(204).json(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
})
    .post(async (req, res) => {
    try {
        const data = await bookingRepository_1.default.getBookingByUser(req.body.userId);
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.default = bookingDispatcher;
