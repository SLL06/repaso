import { Router } from "express";
import { crearUsuario, eliminarUsuario, listarUsuario, modificarUsuario, mostrarUsuario } from "../controllers/controller.user";

const rutaUser = Router();

rutaUser.get("/user/:id", mostrarUsuario);
rutaUser.get("/user", listarUsuario);
rutaUser.post("/user", crearUsuario);
rutaUser.put("/user", modificarUsuario);
rutaUser.delete("/user", eliminarUsuario);

export default rutaUser;