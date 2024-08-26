import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

const Employees = () => {
  const url = "https://wc.sirees.online/api/v2/empleado";
  const [employees, setEmployees] = useState([]);
  const getEmployees = async () => {
    try {
      const response = axios.get(url);
      console.log("🚀 ~ getEmployees ~ response:", response);
      setEmployees(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      <div className="page-wrapper container-fluid">
        <table className="table table-borer">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.nombre}</td>
                <td>{employee.apellido}</td>
                <td>{employee.email}</td>
                <td>
                  <div className="d-flex-justify-content-between">
                    <button className="btn" onClick={}>Editar</button>
                    <button className="btn" onClick={}>Eliminar</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Employees;
