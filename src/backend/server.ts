import express from "express";
import cors from "cors";
import env from "dotenv";
import carRoutes from "./routes/carRoutes";
import carInsuranceQuote from "./routes/carInsuranceRoutes";


env.config();

const server = express();
server.use(cors());
server.use(express.json());

server.use("/", carRoutes);
server.use("/", carInsuranceQuote);


const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
