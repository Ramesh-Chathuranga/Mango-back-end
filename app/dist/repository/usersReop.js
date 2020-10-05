"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = __importDefault(require("./repository"));
class UserRepository extends repository_1.default {
    constructor() {
        super(...arguments);
        this.getAllUsers = async () => {
            return await this.getAll();
        };
    }
}
exports.default = new UserRepository("users");
