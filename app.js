import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

import routes from "./routes";

import globalRouter from "./routers/globalRouter";
import boardRouter from "./routers/boardRouter";

const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes.home, globalRouter);
app.use(routes.board, boardRouter);

export default app;
