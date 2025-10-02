
import axios from "axios"
import { useState } from "react"
function RegistrarAlumnos() {

    const [DNI, setDNI] = useState()
    const [Nombre, setNombre] = useState("")
    const [Apellido, setApellido] = useState("")

    const handleSubmit = async (e) => {
        const Alumnos={DNI,Nombre,Apellido};
        // ---> No Se recargue la pagina
        e.preventDefault();

        try {
            // ---> Ubicacion del Servidor
            const Servidor = await fetch('http://localhost:3000/api/VerAlumnos', {
                // ---> Metodo a Utilizar
                method: 'POST',
                // --->
                headers: { "Content-Type": "application/json" },

                // ---> Convertimos la Informacion de los input en Json
                body: JSON.stringify(Alumnos)
            })
            // ---> Convertimos los tipos de datos para enviarlos en Json
            const data= await Servidor.json();
            alert(data.Mensaje || 'Datos Registrados')
        }
        catch (Error) {

        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">DNI</label>
                <input type="number" name="" id="" value={DNI}
                    onChange={(e)=> setDNI(e.target.value)}
                />

                <label htmlFor="">Nombre</label>
                <input type="text" name="" id="" value={Nombre}
                 onChange={(e)=> setNombre(e.target.value)}/>

                <label htmlFor="">Apellido</label>
                <input type="text" name="" id="" value={Apellido}
                 onChange={(e)=> setApellido(e.target.value) }/>

                <input type="submit" value="Registrar Alumnos" />
            </form>
        </>
    )
}

export default RegistrarAlumnos