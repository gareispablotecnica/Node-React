// 1° ---> Importar las dependencias
const express= require('express')

// ---> Variable Principal: Contiene Métodos de express
const App= express()

require('dotenv').config()
// ---> Puerto del Servidor
const PORT=process.env.PORT || 5000

App.listen(PORT,()=>{
    console.log(`🚀 Corriendo el Servidor en: http://localhost:${PORT}`)
})