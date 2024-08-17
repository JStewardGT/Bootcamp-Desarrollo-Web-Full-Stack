import { useState } from "react";
import ReactDOM from "react-dom/client";

function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nombre ingresado: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ingrese su nombre:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <input type="submit" value="Enviar" />
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyForm />);