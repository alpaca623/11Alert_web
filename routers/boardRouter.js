import express from "express";
import routes from "../routes";
import { boardList, boardDetail, boardWrite } from "../controllers/boardController";

const boardRouter = express.Router();

boardRouter.get(routes.home, boardList);

boardRouter.get(routes.boardWrite, boardWrite);

boardRouter.get(routes.boardDetail(), boardDetail);

export default boardRouter;
