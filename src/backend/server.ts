import express from "express";
import cors from "cors";
import env from "dotenv";
import app from "./app";

env.config();

const server = express();
server.use(cors());
server.use(express.json());

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});

export { server, app };
