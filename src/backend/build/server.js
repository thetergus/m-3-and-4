"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var dotenv_1 = require("dotenv");
var carRoutes_1 = require("./routes/carRoutes");
dotenv_1.default.config();
var server = (0, express_1.default)();
server.use((0, cors_1.default)());
server.use(express_1.default.json());
server.use("/", carRoutes_1.default);
var PORT = process.env.PORT;
server.listen(PORT, function () {
  console.log("Server started on ".concat(PORT));
});
