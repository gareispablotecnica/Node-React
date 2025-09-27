import Encabezado from './Header/Encabezado'
import './Layouts.css'
// ---> Sirve para las rutas de los enlaces en el menú de navegación
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import VerTabla from './Pages/VerTabla';
function Layouts() {
  return (
    <>
      <Router>
        <Encabezado />
        {/* Sobre el Encabezado Indicamos las rutas */}
        <Routes>
          {/* Indicamos la Ruta de Navegacion */}
          <Route path="/VerTabla" element={<VerTabla />} />
        </Routes>
      </Router>

    </>
  )
}

export default Layouts