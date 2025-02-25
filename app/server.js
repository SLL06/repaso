import express from "express";
import ruta from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", ruta);

export default app;