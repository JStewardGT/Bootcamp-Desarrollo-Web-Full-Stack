M.AutoInit();

const empleadoForm = document.getElementById("empleadoForm");
const tipoEmpleado = document.getElementById("tipoEmpleado");
const resultado = document.getElementById("resultado");

const inputs = {
  horasTrabajadasDiv: document.getElementById("horasTrabajadasDiv"),
  horasTrabajadas: document.getElementById("horasTrabajadas"),
  cuotaPorHoraDiv: document.getElementById("cuotaPorHoraDiv"),
  cuotaPorHora: document.getElementById("cuotaPorHora"),
  sueldoMensualDiv: document.getElementById("sueldoMensualDiv"),
  sueldoMensual: document.getElementById("sueldoMensual"),
};

tipoEmpleado.addEventListener("change", handleTipoEmpleadoChange);
empleadoForm.addEventListener("submit", handleFormSubmit);

class Empleado {
  constructor(nombre) {
    this._nombre = nombre;
  }

  get nombre() {
    return this._nombre;
  }

  getMoneda(salario) {
    return salario.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    });
  }

  calcularSalario() {
    throw new Error("El método calcularSalario debe ser implementado");
  }
}

class EmpleadoPorHora extends Empleado {
  constructor(nombre, horasTrabajadas, cuotaPorHora) {
    super(nombre);
    this._horasTrabajadas = horasTrabajadas;
    this._cuotaPorHora = cuotaPorHora;
  }

  calcularSalario() {
    const salario = this._horasTrabajadas * this._cuotaPorHora;
    return this.getMoneda(salario);
  }
}

class EmpleadoAsalariado extends Empleado {
  constructor(nombre, sueldoMensual) {
    super(nombre);
    this._sueldoMensual = sueldoMensual;
  }

  calcularSalario() {
    const salario = this._sueldoMensual * 1.2;
    return this.getMoneda(salario);
  }
}

function handleTipoEmpleadoChange() {
  resultado.classList.add("scale-out");
  const tipo = tipoEmpleado.value;

  if (tipo === "hora") {
    toggleInputs(true, false);
  } else if (tipo === "asalariado") {
    toggleInputs(false, true);
  }
}

function toggleInputs(isHora, isAsalariado) {
  updateInput(inputs.horasTrabajadasDiv, inputs.horasTrabajadas, isHora);
  updateInput(inputs.cuotaPorHoraDiv, inputs.cuotaPorHora, isHora);
  updateInput(inputs.sueldoMensualDiv, inputs.sueldoMensual, isAsalariado);
}

function updateInput(div, input, isActive) {
  div.classList.toggle("scale-out", !isActive);
  input.required = isActive;
  if (!isActive) {
    input.value = "";
  }
}

function handleFormSubmit(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const tipo = tipoEmpleado.value;

  if (!tipo) {
    alert("Por favor, seleccione un tipo de empleado.");
    return;
  }

  let empleado;
  if (tipo === "hora") {
    empleado = new EmpleadoPorHora(
      nombre,
      parseFloat(inputs.horasTrabajadas.value),
      parseFloat(inputs.cuotaPorHora.value)
    );
  } else if (tipo === "asalariado") {
    empleado = new EmpleadoAsalariado(nombre, parseFloat(inputs.sueldoMensual.value));
  }

  resultado.textContent = `El salario de ${empleado.nombre} es: ${empleado.calcularSalario()}`;
  resultado.classList.remove("scale-out");
}
