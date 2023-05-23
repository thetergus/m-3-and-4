// import express from "express";
// import cors from "cors";
// import env from "dotenv";
// import { Server } from "http";
// import carRoutes from "./routes/carRoutes";
// import carInsuranceQuote from "./routes/carInsuranceRoutes"

// env.config();

// const server = express();
// server.use(cors());
// server.use(express.json());

// server.use("/", carRoutes);
// server.use("/", carInsuranceQuote);

// const PORT = process.env.PORT || 3002;
// const app: Server = server.listen(PORT, () => {
//   console.log(`Server started on ${PORT}`);
// });

// export { server, app };
import env from "dotenv";
import app from "./app";

env.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
