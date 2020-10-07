import express from "express";
import { requestResponseLogger } from "./middleware/request-response-Logger";
import MainDispatcher from "./dispatcher/mainDispatcher";
import { dbConnection } from "./db/mongoDB";

dbConnection();
const app = express();
const port = process.env.PORT || 3000;
app.use(requestResponseLogger);
app.use(MainDispatcher);

app.listen(port, () => console.log("server is running on port" + port));
