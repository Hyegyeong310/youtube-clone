import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "YouTube Clone";
  res.locals.routes = routes;
  next();
};
