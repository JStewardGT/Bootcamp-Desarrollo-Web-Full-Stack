const NewArticle = ({ title, texto }) => {
  return (
    <article className="border-b-2 py-5 last:border-none">
      <p className="font-bold text-white text-[15px] sm:text-[17px]">{title}</p>
      <p className="text-white text-[13px] sm:text-[15px]">{texto}</p>
    </article>
  );
};

export default NewArticle;
