const express= require('express')
// --> Variable Principal: Contiene Métodos de express
const router= express.Router();

// ---> Invocamos Funciones o metodo de otra hoja
const ruta=require('../Controllers/VerTablaAlumno.Controller')
// ---> Definimos las Rutas
router.get('/verAlumnos',ruta.VerTablaAlumnos)
// ---> Exportamos las Rutas
module.exports=router;