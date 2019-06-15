import express from "express";
import routes from "../routes";
import { home, getJoin, postJoin, getLogin, getLogout } from "../controllers/homeController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.get(routes.logout, getLogout);

export default globalRouter;