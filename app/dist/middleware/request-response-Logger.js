"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestResponseLogger = void 0;
exports.requestResponseLogger = function (req, res, next) {
    console.info("\x1b[33m", req.method + " " + req.originalUrl);
    var start = new Date().getTime();
    res.on('finish', function () {
        var diff = new Date().getTime() - start;
        console.info("\x1b[33m", req.method + " " + req.originalUrl + " status code " + res.statusCode + " in " + diff + " seconds");
    });
    next();
};
