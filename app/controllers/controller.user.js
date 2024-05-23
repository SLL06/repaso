import { pool } from "../config/mysql.db";

export const mostrarUsuario = async(req, res)=>{
    const id = req.params['id'];
    try {
        const respuesta = await pool.query(`CALL SP_MOSTRAR_USUARIO(${id});`);
        res.json({"respuesta":respuesta});
    } catch (error) {
        res.json({"error":error});
    }
};
export const listarUsuario = async(req, res)=>{
    try {
        const respuesta = await pool.query(`CALL SP_LISTAR_USUARIO();`);
        res.json({"respuesta":respuesta});
    } catch (error) {
        res.json({"error":error});
    }
};
export const crearUsuario = async(req, res)=>{
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const clave = req.body.clave;
    try {
        const respuesta = await pool.query(`CALL SP_CREAR_USUARIO('${nombre}','${apellido}','${clave}');`);
        res.json({"respuesta":respuesta});
    } catch (error) {
        res.json({"error":error});
    }
};
export const modificarUsuario = async(req, res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const clave = req.body.clave;
    try {
        const respuesta = await pool.query(`CALL SP_MODIFICAR_USUARIO('${nombre}','${apellido}','${clave}','${id}');`);
        res.json({"respuesta":respuesta});
    } catch (error) {
        res.json({"error":error});
    }
};
export const eliminarUsuario = async(req, res)=>{
    const id = req.dody.id;
    try {
        const respuesta = await pool.query(`CALL SP_ELIMINAR_USUARIO(${id});`);
        res.json({"respuesta":respuesta});
    } catch (error) {
        res.json({"error":error});
    }
};