import * as carValueService from "../services/carValueService";
import { Request, Response } from "express";

export const getCarValues = (req: Request, res: Response) => {
  const carValues = carValueService.getCarValues();
  res.send(carValues);
};

export const createCarValue = (req: Request, res: Response) => {
  const model = req.body.model;
  const year = req.body.year;
  const newCarValue = carValueService.createCarValue(model, year);
  res.send(newCarValue);
};

export const getCarValueById = (req: Request, res: Response) => {
  const carValueId = parseInt(req.params.id);
  const matchedCarValue = carValueService.getCarValueById(carValueId);

  if (!matchedCarValue) {
    res.status(404).send("Sorry can't seem to generate a car value");
  }

  res.send(matchedCarValue);
};

export const calculateCarValue = (req: Request, res: Response) => {
  const model = req.body.model;
  const year = req.body.year;

  if (!model || !year) {
    res.status(400).json({
      error: "Sorry something went wrong! Have you filled both fields?",
    });
    return;
  }

  const carValue = carValueService.calculateCarValue(model, year);
  res.json({ car_value: carValue });
};
