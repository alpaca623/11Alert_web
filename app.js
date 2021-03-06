import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cookieParser from 'cookie-parser';

import routes from "./routes";

import homeRouter from "./routers/homeRouter";
import boardRouter from "./routers/boardRouter";
import { middleware } from "./middleware";

const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use('/static', express.static('static'));

app.use(middleware);

app.use(routes.home, homeRouter);
app.use(routes.boardList, boardRouter);

export default app;
