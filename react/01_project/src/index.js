import { useState } from "react";
import ReactDOM from "react-dom/client";

function MyForm() {
  const [inputs, setInputs] = useState({
    username: "Juan",
    edad: "25",
    carro: "Mazda",
    comentario: "Hoy es 20 de agosto de 2024 es un año bisiesto",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ingrese su nombre:
        <input type="text" name="username" value={inputs.username || ""} onChange={handleChange} />
      </label>
      <br />
      <label>
        Ingrese su edad:
        <input type="number" name="edad" value={inputs.edad || ""} onChange={handleChange} />
      </label>
      <br />
      <label>
        Ingrese la marca de su carro
        <select name="carro" value={inputs.carro || ""} onChange={handleChange}>
          <option value="Ford">Ford</option>
          <option value="BMW">BMW</option>
          <option value="Mazda">Mazda</option>
          <option value="Chevrolet">Chevrolet</option>
        </select>
      </label>
      <br />
      <label>
        Comentario:
        <textarea name="comentario" value={inputs.comentario || ""} onChange={handleChange} />
      </label>
      <br />
      <input type="submit" value="Enviar" />
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyForm />);
