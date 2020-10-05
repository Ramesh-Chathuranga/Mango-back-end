"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const request_response_Logger_1 = require("./middleware/request-response-Logger");
const mainDispatcher_1 = __importDefault(
  require("./dispatcher/mainDispatcher")
);
const mongoDB_1 = require("./db/mongoDB");
mongoDB_1.dbConnection();
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(request_response_Logger_1.requestResponseLogger);
app.use(mainDispatcher_1.default);
app.listen(port, () => console.log("server is running on port" + port));
