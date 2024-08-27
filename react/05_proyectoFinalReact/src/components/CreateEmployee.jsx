import { useState } from "react";
import Page from "../layouts/Page";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const CreateEmployee = () => {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Guardar",
      text: "Desea guardar el registro del empleado",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, deseo guardarlo",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.post("https://wc.sirees.online/api/v2/empleado", {
            nombres,
            apellidos,
            email,
          });
          if (response.status === 201) {
            Swal.fire({
              title: "Guardado",
              text: "Registro guardado correctamente",
              icon: "success",
            });
            setNombres("");
            setApellidos("");
            setEmail("");
          }
        } catch (error) {
          console.log("🚀 ~ handleSubmit ~ error:", error);
          Swal.fire({
            title: "Error",
            text: "Error al guardar el registro",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <Page>
      <div className="card">
        <div className="card-header">
          <h2>Crear empleados</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="nombres" className="form-label">
                Nombres
              </label>
              <input
                type="text"
                className="form-control"
                id="nombres"
                value={nombres}
                onChange={(e) => setNombres(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="apellidos" className="form-label">
                Apellidos
              </label>
              <input
                type="text"
                className="form-control"
                id="apellidos"
                value={apellidos}
                onChange={(e) => setApellidos(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-success">
              Guardar
            </button>
            <NavLink to="/employees" className="btn btn-info ms-3">
              Volver
            </NavLink>
          </form>
        </div>
      </div>
    </Page>
  );
};

export default CreateEmployee;
