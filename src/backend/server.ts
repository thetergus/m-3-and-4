import express from "express";
import cors from "cors";
import env from "dotenv";
import carRoutes from "./routes/carRoutes";
import { Server } from "http";

env.config();

const server = express();
server.use(cors());
server.use(express.json());

server.use("/", carRoutes);

const PORT = process.env.PORT || 3002;
const app: Server = server.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});

export { server, app };
