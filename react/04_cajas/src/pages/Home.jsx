import { React } from "react";
import Caja from "../components/Caja";

function Home() {
  const infoImagenes = [
    {
      image: "hollow_knight1.jpg",
      title: "Hollow Knight",
      paragraph:
        "La atmósfera del juego es oscura y envolvente, con una banda sonora cautivadora y un arte visual impresionante2. Hollow Knight ha sido muy elogiado por su diseño de niveles, su dificultad desafiante y su profunda narrativa",
      id: 1,
    },
    {
      image: "hollow_knight2.jpg",
      title: "Hollow Knight",
      paragraph: "Una aventura épica en un mundo abisal",
      id: 2,
    },
    {
      image: "hollow_knight3.jpg",
      title: "Hollow Knight",
      paragraph: "Una aventura épica en un mundo abisal",
      id: 3,
    },
    {
      image: "hollow_knight4.jpg",
      title: "Hollow Knight",
      paragraph:
        "La atmósfera del juego es oscura y envolvente, con una banda sonora cautivadora y un arte visual impresionante2. Hollow Knight ha sido muy elogiado por su diseño de niveles, su dificultad desafiante y su profunda narrativa",
      id: 4,
    },
  ];
  return (
    <div className="App">
      <div className="contenedorCajas">
        {infoImagenes.map((imagen, index) => (
          <Caja image={imagen.image} title={imagen.title} paragraph={imagen.paragraph} id={imagen.id} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Home;
