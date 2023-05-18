import express from "express";
import { Request, Response } from "express";
import * as carValueController from "../controllers/carValueController";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the car value generator!");
});

router.get("/carValues", carValueController.getCarValues);

router.post("/carValues", carValueController.createCarValue);

router.get("/carValues/:id", carValueController.getCarValueById);

router.post("/carValue", carValueController.calculateCarValue);

export default router;
