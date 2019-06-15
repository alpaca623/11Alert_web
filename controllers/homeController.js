export const home = (req, res) => {
  res.render("home");
};

export const getJoin = (req, res) => {
  res.render("join");
}
export const postJoin = (req, res) => {
  console.log(req.body);
  res.redirect(routes.home);
}