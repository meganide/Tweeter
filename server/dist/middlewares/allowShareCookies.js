function allowShareCookies(req, res, next) {
    res.header('Access-Control-Allow-Credentials', 'true'); // Allow send cookies to client
    next();
}
export { allowShareCookies };
