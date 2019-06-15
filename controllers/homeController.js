export const home = (req, res) => {
  res.render("home");
};

export const getJoin = (req, res) => {
  res.render("join");
}
export const postJoin = (req, res) => {
  res.redirect(routes.home);
}

export const getLogin = (req, res) => {
  res.render("login");
}

export const getLogout = (req, res) => {
  res.send("logout");
}