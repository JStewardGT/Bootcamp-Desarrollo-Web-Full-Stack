import React from "react";
import "./../styles/caja.css";
import { useNavigate } from "react-router-dom";

function Caja({ id, image, title, paragraph }) {
  const navigate = useNavigate();
  return (
    <div className="contenerodTexto">
      <img src={require(`../images/${image}`)} alt={title} className="contenedorImagen" />
      <h2 className="contenerodTitulo">{title}</h2>
      <p className="contenerodParrafo">{paragraph}</p>
      <button className="contenerodBoton" onClick={() => navigate(`/info/${id}`)}>
        Ver más información
      </button>
    </div>
  );
}

export default Caja;
