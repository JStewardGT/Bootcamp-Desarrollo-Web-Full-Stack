import React from "react";
import ReactDOM from "react-dom/client";
// import Car from "./Car";

// function Garage() {
//   const carInfo = { name: "Ford", model: "Mustang" };
//   return (
//     <>
//       <h1>Who lives in my Garage?</h1>
//       <Car info={carInfo} color="red" />
//     </>
//   );
// }

function Football() {
  const shoot = (a, b) => {
    alert(b.type);
  };

  return <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>;
}

function MissedGoal() {
  return <h1>Missed</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}

// function Goal(props) {
//   const isGoal = props.isGoal;
//   if (isGoal) {
//     return <MadeGoal />;
//   }
//   return <MissedGoal />;
// }

// function Garage(props) {
//   const cars = props.cars;
//   return (
//     <>
//       <h1>Who lives in my Garage?</h1>
//       {cars.length > 0 && <h2>You have {cars.length} cars in your garage.</h2>}
//     </>
//   );
// }

function Goal(props) {
  const isGoal = props.isGoal;
  return <>{isGoal ? <MadeGoal /> : <MissedGoal />}</>;
}

function Car(props) {
  return <li> I am a {props.brand}</li>;
}

// function Garage() {
//   const cars = ["Ford", "BMW", "Audi"];
//   return (
//     <>
//       <h1>Who lives in my Garage?</h1>
//       <ul>
//         {cars.map((car) => (
//           <Car brand={car} />
//         ))}
//       </ul>
//       {cars.length > 0 && <h2>You have {cars.length} cars in your garage.</h2>}
//     </>
//   );
// }

function Garage() {
  const cars = [
    { id: 1, brand: "Ford" },
    { id: 2, brand: "BMW" },
    { id: 3, brand: "Audi" },
  ];
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <ul>
        {cars.map((car) => (
          <Car key={car.id} brand={car.brand} />
        ))}
      </ul>
      {cars.length > 0 && <h2>You have {cars.length} cars in your garage.</h2>}
    </>
  );
}

function MyForm() {
  return <form>
    <label>
      Enter your name:
      <input type="text" name="name" />
    </label>
  </form>;
}

const cars = ["Ford", "BMW", "Audi"];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyForm />);
