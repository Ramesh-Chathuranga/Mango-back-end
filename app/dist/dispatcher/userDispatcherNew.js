"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usersReop_1 = __importDefault(require("../repository/usersReop"));
const usersDispatcher = express_1.default.Router();
usersDispatcher.route("").get(async (req, res) => {
    try {
        const data = await usersReop_1.default.getAllUsers();
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.default = usersDispatcher;
