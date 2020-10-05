"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const roomRepository_1 = __importDefault(require("../repository/roomRepository"));
const roomDispatcher = express_1.default.Router();
roomDispatcher.route("")
    .get(async (req, res) => {
    try {
        const data = await roomRepository_1.default.getRoomList();
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
roomDispatcher.route("/:id")
    .get(async (req, res) => {
    try {
        const id = req.params.id;
        const data = await roomRepository_1.default.getRoom(id);
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.default = roomDispatcher;
