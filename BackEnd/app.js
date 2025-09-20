// 1° ---> Importar las dependencias
const express= require('express')

// ---> Variable Principal: Contiene Métodos de express
const App= express()

require('dotenv').config()
// ---> Puerto del Servidor
const PORT=process.env.PORT || 5000

// ---> Cors se utiliza para permitir las solicitudes entre diferentes dominios
const cors= require('cors')
App.use(cors())
// ---> Middleware para analizar solicitudes JSON
App.use(express.json())

// ---> Importar Rutas
const ruta= require('./Routers/VerTablaAlumno.Router')
// ---> Usar Rutas
App.use('/api',ruta)



App.listen(PORT,()=>{
    console.log(`🚀 Corriendo el Servidor en: http://localhost:${PORT}`)
})