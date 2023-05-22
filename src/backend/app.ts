import express from "express";
import carRoutes from "./routes/carRoutes";

const app = express();
app.use(express.json());

app.use("/", carRoutes);

// const PORT = process.env.PORT;
// const server: Server = app.listen(PORT, () => {
//   console.log(`Server started on ${PORT}`);
// });

export default app;
