"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var request_response_Logger_1 = require("./middleware/request-response-Logger");
var mainDispatcher_1 = __importDefault(require("./dispatcher/mainDispatcher"));
var mongoDB_1 = require("./db/mongoDB");
mongoDB_1.dbConnection();
var app = express_1.default();
var port = process.env.PORT || 5000;
app.use(request_response_Logger_1.requestResponseLogger);
app.use(mainDispatcher_1.default);
app.listen(port, function () { return console.log("server is running on port" + port); });
