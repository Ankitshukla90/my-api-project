const logger = (req, res, next) => {
    const start = Date.now();
    const { method, url } = req;

    // Log when the request finishes to get the status code
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(` ${method} ${url} ${res.statusCode} - ${duration}ms`);
    });
    next();
};
module.exports = logger;