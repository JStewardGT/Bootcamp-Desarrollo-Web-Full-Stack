import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Info() {
  const { id } = useParams();
  const [data, setData] = useState({});

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

  function cambiarValor() {
    // if (id == 1) setData(infoImagenes[0]);
    // if (id == 2) setData(infoImagenes[1]);
    // if (id == 3) setData(infoImagenes[2]);
    // if (id == 4) setData(infoImagenes[3]);
    setData(infoImagenes.find((e) => e.id == id))
  }

  useEffect(() => {
    cambiarValor();
  }, [id]);

  return (
    <div>
      <h1>{data.title}</h1>
      <h2>Entró</h2>
      <p>{data.paragraph}</p>
      <img src={`../images/${data.image}`} alt="" />
    </div>
  );
}

export default Info;
