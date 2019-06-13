import express from "express";
import routes from "../routes";
import { boardList, boardDetail } from "../controllers/boardController";

const boardRouter = express.Router();

boardRouter.get(routes.board, boardList);
boardRouter.get(routes.boardDetail(), boardDetail);

export default boardRouter;