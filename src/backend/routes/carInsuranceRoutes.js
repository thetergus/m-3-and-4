"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var carInsuranceController_1 = require("../controllers/carInsuranceController");
var router = express_1.default.Router();
router.get('/calculateQuote', carInsuranceController_1.getQuote);
exports.default = router;
