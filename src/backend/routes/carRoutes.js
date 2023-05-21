"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var carValueController = require("../controllers/carValueController");
var router = express_1.default.Router();
router.get("/", function (req, res) {
    res.send("Welcome to the car value generator!");
});
router.get("/carValues", carValueController.getCarValues);
router.post("/carValues", carValueController.createCarValue);
router.get("/carValues/:id", carValueController.getCarValueById);
router.post("/carValue", carValueController.calculateCarValue);
exports.default = router;
