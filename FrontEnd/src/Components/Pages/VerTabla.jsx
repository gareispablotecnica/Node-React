// ---> Axios para hacer peticiones HTTP
import axios from 'axios'
import { useEffect ,useState} from 'react'

function VerTabla() {
    // ---> State para guardar los datos de los alumnos
    const [Alumnos, setAlumnos] = useState([])
    // ---> Utilizamos useEffect para cargar los datos al cargar el componente
    useEffect(() => {
        const Servidor = async () => {
            try {
                // ---> Hacemos la peticion al servidor (BackEnd)
                const respuesta = await axios.get('https://node-react-rvou.onrender.com/api/VerAlumnos')
                // ---> Guardamos los datos en el state
                setAlumnos(respuesta.data)
            }
            catch (error) {
                console.error('❗ Error al cargar los datos', error)
            }
        }
        // ---> Llamamos a la funcion para cargar los datos
        Servidor()
        // ---> El array vacio indica que solo se ejecuta una vez al cargar el componente
    }, [])
    return (
        <>
            {/* Creamos la Tabla */}
            <table className="datos">
                {/* Encabezado de la Tabla */}
                <thead>
                    {/* Columnas de la Tabla */}
                    <tr>
                        <td>DNI</td>
                        <td>Nombre</td>
                        <td>Apellido</td>
                    </tr>
                </thead>
                {/* Cuerpo de la Tabla */}
                <tbody>
                    {/* Recorremos cada datos de la Base de Datos (Servidor BackEnd) */}
                    {Alumnos.map((i) => (
                        //---> KEY es un identificador unico para cada elemento
                        <tr key={i.DNI}>
                            {/* Taraemos cada elemento */}
                            <td>{i.DNI}</td>
                            <td>{i.Nombre}</td>
                            <td>{i.Apellido}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default VerTabla