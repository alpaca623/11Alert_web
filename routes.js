const HOME = "/";

const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

const BOARD_LIST = "/boardList";
const BOARD_DETAIL = "/:id";
const BOARD_WRITE = "/write";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  boardList: BOARD_LIST,
  boardDetail: id => {
    if (id) {
      return `/boardList/${id}`;
    } else {
      return BOARD_DETAIL;
    }
  },
  boardWrite: BOARD_WRITE
};

export default routes;
