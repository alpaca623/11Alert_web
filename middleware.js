import routes from './routes';

export const middleware = (req, res, next) => {
    res.locals.routes = routes;
    res.locals.user = {
        isAuthentication : false,
    }
    next();
}