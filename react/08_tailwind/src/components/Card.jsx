const Card = ({ image, item, title, description }) => {
  return (
    <article className="flex gap-4 mb-4">
      <img className="h-24" src={image} alt={title} />
      <div>
        <p className="text-soft-red font-bold text-[20px] sm:text-[25px]">{item}</p>
        <h3 className="font-bold text-[15px] sm:text-[18px]">{ title }</h3>
        <p className="text-grayish-blue text-[13px] sm:text-[15px]">{description}</p>
      </div>
    </article>
  );
};

export default Card;
