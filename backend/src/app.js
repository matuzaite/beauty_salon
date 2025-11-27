import express from "express";
import cors from "cors";
import serviceRoutes from "./routes/serviceRoutes.js";
import specialistRoutes from "./routes/specialistRoutes.js";

const app = express();

app.use(cors({
  origin: "http://localhost:3000"
}));

app.use(express.json());

app.use("/services", serviceRoutes);
app.use("/specialists", specialistRoutes);

export default app;
