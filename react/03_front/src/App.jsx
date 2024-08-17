import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./page/Inicio";
import Empleados from "./page/Empleados";
import Nosotros from "./page/Nosotros";
import Contactanos from "./page/Contactanos";
import NoEncontrado from "./page/NoEncontrado";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="/empleados" element={<Empleados />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="*" element={<NoEncontrado />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
