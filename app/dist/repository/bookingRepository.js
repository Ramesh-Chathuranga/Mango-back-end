"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = __importDefault(require("./repository"));
class BookingRepository extends repository_1.default {
    constructor() {
        super(...arguments);
        this.getAllBooking = async () => {
            return await this.getAll();
        };
        this.getBooking = async (id) => {
            return await this.getData(id);
        };
        this.createBooking = async (object) => {
            return await this.createDocument(object);
        };
        this.deleteBooking = async (id) => {
            return await this.deleteDocument(id);
        };
        this.getBookingByUser = async (id) => {
            return await this.findDocument('userId', id);
        };
    }
}
exports.default = new BookingRepository('booking');
