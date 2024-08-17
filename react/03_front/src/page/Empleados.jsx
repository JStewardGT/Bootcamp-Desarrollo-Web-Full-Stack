import { useEffect } from "react";
import { useState } from "react";

const Empleados = () => {
  const url = "https://wc.sirees.online/api/v2/empleado";
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    const fetchEmpleados = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        console.log("🚀 ~ useEffect ~ data:", data);
        setEmpleados(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEmpleados();
  }, []);

  console.log(empleados);

  return (
    <div className="row">
      <div className="col-md12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Empleados</h4>
          </div>
          <div className="card-body">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombres</th>
                  <th>Apellidos</th>
                  <th>Direccion</th>
                  <th>Email</th>
                  <th>Telefono</th>
                </tr>
              </thead>
              <tbody>
                {empleados &&
                  empleados.map((empleado) => (
                    <tr key={empleado._id}>
                      <td>{empleado._id}</td>
                      <td>{empleado.nombres}</td>
                      <td>{empleado.apellidos}</td>
                      <td>{empleado.direccion}</td>
                      <td>{empleado.email}</td>
                      <td>{empleado.telefono}</td>
                      <td>
                        <button type="button" className="btn btn-info">
                          Editar
                        </button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-danger">
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empleados;
