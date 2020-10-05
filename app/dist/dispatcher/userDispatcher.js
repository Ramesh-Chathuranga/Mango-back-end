"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRepository_1 = __importDefault(require("../repository/userRepository"));
const userDispatcher = express_1.default.Router();
userDispatcher.route("")
    .get(async (req, res) => {
    try {
        const data = await userRepository_1.default.getAllUsers();
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
})
    .post((req, res) => {
    res.status(200).send('ok');
})
    .put(async (req, res) => {
    try {
        const body = req.body;
        if (body.uid !== body.uid) {
            res.status(400).send("invalid Request Body");
            return;
        }
        const data = await userRepository_1.default.updateData(body, body.uid);
        res.status(204).json(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
userDispatcher.route("/:id")
    .get(async (req, res) => {
    try {
        const uid = req.params.id;
        const data = await userRepository_1.default.getAUser(uid);
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
})
    .delete((req, res) => {
    res.status(200).send('ok');
});
exports.default = userDispatcher;
