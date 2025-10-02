// ---> Importar la Base de Datos
const db= require('../Server/database')

// ---> Ver la Tabla y sus objetos
exports.VerTablaAlumnos=(req,res)=>{
    // ---> Query para ver la tabla
    query='SELECT * FROM Alumnos';
    // ---> Ejecutar la Query
    db.all(query,[],(Error,Filas)=>{
        if(Error){
            // ---> Enviar Error
            return res.status(500).json({Error:'❗ Error en la Carga de la Tabla de la BD'})
        }
        else{
            // ---> Enviar las Filas
            res.json(Filas)
        }
    })
}

// ---> RegistrarAlumnos
exports.RegistrarAlumnos=(req,res)=>{

    const {DNI,Nombre,Apellido}=req.body;
    // ---> Query para ver la tabla
    query='INSERT INTO Alumnos(DNI,Nombre,Apellido)VALUES(?,?,?)';
    // ---> Ejecutar la Query
    db.run(query,[DNI,Nombre,Apellido],(Error)=>{
        if(Error){
            // ---> Enviar Error
            return res.status(500).json({Error:'❗ Error en la Carga de datos'})
        }
        else{
            // ---> Enviar las Filas
            res.json({
                Mensaje:'Datos Registrados',
                ID:this.lastID
            })
        }
    })
}

