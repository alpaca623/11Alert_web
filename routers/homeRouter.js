import express from "express";
import routes from "../routes";
import { home, getJoin, postJoin } from "../controllers/homeController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

export default globalRouter;