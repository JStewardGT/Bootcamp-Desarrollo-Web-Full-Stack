import reviving from "../assets/images/image-retro-pcs.jpg";
import laptops from "../assets/images/image-top-laptops.jpg";
import gaming from "../assets/images/image-gaming-growth.jpg";
import Card from "./Card";

const CardContainer = () => {
  const data = [
    {
      id: "01",
      title: "Reviving Retro PCs",
      description: "What happens when old PCs are given modern upgrades?",
      image: reviving,
    },
    {
      id: "02",
      title: "Top 10 Laptops of 2022",
      description: "Our best picks for various needs and budgets.",
      image: laptops,
    },
    {
      id: "03",
      title: "The Growth of Gaming",
      description: "How the pandemic has sparked fresh opportunities.",
      image: gaming,
    },
  ];
  return (
    <>
      {data.map((item) => (
        <Card key={item.id} item={item.id} title={item.title} description={item.description} image={item.image} />
      ))}
    </>
  );
};

export default CardContainer;
