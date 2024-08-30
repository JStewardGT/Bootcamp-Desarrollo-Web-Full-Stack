import imageMobile from "../assets/images/image-web-3-mobile.jpg";
import imageDesktop from "../assets/images/image-web-3-desktop.jpg";

const MainArticle = () => {
  return (
    <div>
      <picture>
        <source media="(max-width: 640px)" srcSet={imageMobile} />
        <source media="(min-width: 641px)" srcSet={imageDesktop} />
        <img src={imageMobile} alt="Articulo Principal" />
      </picture>

      <div className="mt-4 mb-12 sm:flex">
        <h2 className="text-[40px] sm:text-[58px] font-bold mb-4">The Bright Future of Web 3.0?</h2>

        <div>
          <p className="mb-4 text-[13px] sm:text-[15px]">
            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands
            of the people. But is it really fulfilling its promise?
          </p>

          <button className="bg-soft-red hover:bg-very-dark-blue px-4 py-2 font-bold text-[13px] sm:text-[15px] text-very-dark-blue hover:text-off-white uppercase transition-all">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainArticle;
