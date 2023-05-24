"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
// import { Server } from "http";
const app_1 = __importDefault(require("../../app"));
const carValueService = __importStar(require("../../services/carValueService"));
describe("GET /carValues", () => {
    test("should respond with error if array not received", () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange
        jest.spyOn(carValueService, "getCarValues").mockImplementation(() => {
            throw new Error("An error occurred");
        });
        // Act
        const response = yield (0, supertest_1.default)(app_1.default).get("/carValues");
        // Assert
        expect(response.statusCode).toBe(500);
    }));
});
describe("should create an id for the car info model and year", () => {
    test("should respond with error if array not received fields are not filled", () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange
        jest.spyOn(carValueService, "createCarValue").mockImplementation(() => {
            throw new Error("An error occurred");
        });
        // Act
        const response = yield (0, supertest_1.default)(app_1.default).get("/carValues");
        // Assert
        expect(response.statusCode).toBe(500);
    }));
});
describe("should get the car info using assigned id", () => {
    test("should respond with error if the id doesn't match", () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange
        jest.spyOn(carValueService, "getCarValueById").mockImplementation(() => {
            throw new Error("An error occurred");
        });
        // Act
        const response = yield (0, supertest_1.default)(app_1.default).get("/carValues/:id");
        // Assert
        expect(response.statusCode).toBe(500);
    }));
});
describe("should get calculated car value using id", () => {
    test("should respond with error if the id doesn't match", () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange
        jest
            .spyOn(carValueService, "calculateCarValueById")
            .mockImplementation(() => {
            throw new Error("An error occurred");
        });
        // Act
        const response = yield (0, supertest_1.default)(app_1.default).get("/carValues/:id/calculate");
        // Assert
        expect(response.statusCode).toBe(500);
    }));
});
describe("POST /carValue", () => {
    describe("should calculate car value based on car info model and year", () => {
        test("should respond with error if car value can't be calculated", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            jest
                .spyOn(carValueService, "calculateCarValue")
                .mockReturnValue({ error: "An error occurred" });
            // Act
            const response = yield (0, supertest_1.default)(app_1.default).post("/carValue");
            // Assert
            expect(response.statusCode).toBe(400);
            expect(response.body.error).toBe("Sorry something went wrong! Have you filled both fields?");
        }));
    });
});
describe("POST /calculateCarValueIgnoringNumbers", () => {
    describe("should calculate car value based on car info model and year but ignore numbers in model", () => {
        test("should respond with error if car value can't be calculated", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            jest
                .spyOn(carValueService, "calculateCarValueIgnoringNumbers")
                .mockReturnValue(NaN);
            // Act
            const response = yield (0, supertest_1.default)(app_1.default).post("/carValue");
            // Assert
            expect(response.statusCode).toBe(400);
            expect(response.body.error).toBe("Sorry something went wrong! Have you filled both fields?");
        }));
    });
});
