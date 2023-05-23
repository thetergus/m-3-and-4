"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const carRoutes_1 = __importDefault(require("./routes/carRoutes"));
const carInsuranceRoutes_1 = __importDefault(require("./routes/carInsuranceRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/", carRoutes_1.default);
app.use("/", carInsuranceRoutes_1.default);
// const PORT = process.env.PORT;
// const server: Server = app.listen(PORT, () => {
//   console.log(`Server started on ${PORT}`);
// });
exports.default = app;
