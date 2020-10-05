"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestResponseLogger = void 0;
exports.requestResponseLogger = (req, res, next) => {
    console.info("\x1b[33m", `${req.method} ${req.originalUrl}`);
    const start = new Date().getTime();
    res.on('finish', () => {
        const diff = new Date().getTime() - start;
        console.info("\x1b[33m", `${req.method} ${req.originalUrl} status code ${res.statusCode} in ${diff} seconds`);
    });
    next();
};
