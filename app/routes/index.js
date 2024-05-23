import {Router} from "express";
import rutaUser from "./routes.user";//Linea agregada

const ruta = Router();

ruta.use("/api", rutaUser);//Linea agregada

export default ruta;