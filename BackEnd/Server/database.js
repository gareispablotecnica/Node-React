const sqlite3 = require('sqlite3')

const path= require('path')

const dbubicacion= path.resolve(__dirname,'./escuela.db')

const db= new sqlite3.Database(dbubicacion, (Error)=>{
    if(Error){
        console.error('❗ No se pudo crear la BD')
    }
    else {
        console.log('✔ se creo correctamente la BD')
    }
})

// CREAMOS TABLA
db.run(
    `
        CREATE TABLE IF NOT EXISTS Alumnos(
            DNI INTEGER PRIMARY KEY,
            Nombre TEXT,
            Apellido TEXT
)`)