"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Repository_1 = __importDefault(require("./Repository"));
class RoomRepository extends Repository_1.default {
    constructor() {
        super(...arguments);
        this.getRoom = async (id) => {
            return await this.getData(id);
        };
        this.getRoomList = async () => {
            return await this.getAll();
        };
    }
}
exports.default = new RoomRepository('room');
