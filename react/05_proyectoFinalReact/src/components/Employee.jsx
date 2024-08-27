import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { NavLink } from "react-router-dom";
import Page from "../layouts/Page";

const Employee = () => {
  const url = "https://wc.sirees.online/api/v2/empleado";
  const [employees, setEmployees] = useState();
  const MessageSwal = withReactContent(Swal);
  const getEmployees = async () => {
    try {
      const response = await axios.get(url);
      setEmployees(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const handleDelete = (employeeId) => {
    const urlDelete = `https://wc.sirees.online/api/v2/empleado/${employeeId}`;
    MessageSwal.fire({
      title: "Eliminación de empleado",
      text: "Desea eliminar a este empleado",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#00AAFF",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, lo quiero eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(urlDelete).then((response) => {
          if (response.status === 200) {
            MessageSwal.fire("Empleado Eliminado", "El empleado se ha eliminado de forma correcta", "success");
          }
          getEmployees();
        });
      }
    });
  };

  return (
    <Page>
      <div className="card">
        <div className="card-header">
          <h2>Empleados</h2>
          <NavLink to="/create-employee" className="btn btn-primary">
            Agregar Empleado
          </NavLink>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombres</th>
                  <th>Apellidos</th>
                  <th>Email</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {employees ? (
                  employees.map((employee) => (
                    <tr key={employee._id}>
                      <td>{employee._id}</td>
                      <th>{employee.nombres}</th>
                      <th>{employee.apellidos}</th>
                      <th>{employee.email}</th>
                      <th>
                        <div className="d-flex justify-content-between">
                          <NavLink to={`/edit-employee/${employee._id}`} className="btn btn-info mx-1">
                            Editar
                          </NavLink>
                          <button className="btn btn-danger mx-1" onClick={() => handleDelete(employee._id)}>
                            Eliminar
                          </button>
                        </div>
                      </th>
                    </tr>
                  ))
                ) : (
                  <tr colSpan="4">No Hay datos</tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Employee;
