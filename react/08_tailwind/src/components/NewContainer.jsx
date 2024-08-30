import NewArticle from "./NewArticle";

const NewContainer = () => {
  return (
    <div className="bg-very-dark-blue p-3">
      <h3 className="text-soft-orange font-bold text-[22px]">New</h3>
      <NewArticle title="Hydrogen VS Electric Cars" texto="Will hydrogen-fueled cars ever catch up to EVs?" />
      <NewArticle
        title="The Downsides of AI Artistry"
        texto="What are the possible adverse effects of on-demand AI image generation?"
      />
      <NewArticle
        title="Is VC Funding Drying Up?"
        texto="Private funding by VC firms is down 50% YOY. We take a look at what that means."
      />
    </div>
  );
};

export default NewContainer;
