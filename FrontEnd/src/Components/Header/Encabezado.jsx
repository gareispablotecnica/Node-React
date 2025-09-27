// ---> Sirve para las rutas de los enlaces en el menú de navegación
import { Link } from "react-router-dom";
function Encabezado() {
    return (
        <>
            <header className="encabezado">
                <nav className="menu">
                    {/* Indicamos con "/" que vuelva a la pagina principal */}
                    <Link to="/">Home</Link>
                    <Link to="/VerTabla">Ver Tabla</Link>
                    <Link to="">Modificar Alumnos</Link>
                </nav>
            </header>
        </>
    )
}

export default Encabezado