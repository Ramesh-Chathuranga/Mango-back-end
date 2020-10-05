"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Repository_1 = __importDefault(require("./Repository"));
class HotelRepository extends Repository_1.default {
    constructor() {
        super(...arguments);
        this.getHotel = async (id) => {
            return await this.getData(id);
        };
        this.getHotelList = async () => {
            return await this.getAll();
        };
    }
}
exports.default = new HotelRepository('hotel');
