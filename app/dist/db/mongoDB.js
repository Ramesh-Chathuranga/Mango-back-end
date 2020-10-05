"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var dbConnection = function () {
    mongoose_1.default.connect('mongodb://localhost:27017/testdb', { useNewUrlParser: true, useUnifiedTopology: true });
    var db = mongoose_1.default.connection;
    db.on('error', function (err) { return console.info('error :', err); });
    db.once('open', function () { return console.info("db connection established"); });
};
exports.dbConnection = dbConnection;
