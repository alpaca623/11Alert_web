const HOME = "/";

const BOARD = "/board";
const BOARD_DETAIL = "/:id";

const routes = {
  home: HOME,
  board: BOARD,
  boardDetail: id => {
    if (id) {
      return `/board/${id}`;
    } else {
      return BOARD_DETAIL;
    }
  }
};

export default routes;
