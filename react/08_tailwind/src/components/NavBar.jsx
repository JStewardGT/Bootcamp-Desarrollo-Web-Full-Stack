import burguerMenu from "../assets/images/icon-menu.svg";

const NavBar = () => {
  return (
    <>
      <ul className="hidden sm:flex text-[18px] sm:w-[438px] sm:text-[16px] sm:items-center">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">New</a>
        </li>
        <li>
          <a href="#">Popular</a>
        </li>
        <li>
          <a href="#">Trending</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
      </ul>
      <img className="w-10 h-4 my-auto cursor-pointer sm:hidden" src={burguerMenu} alt="Menu Hamburguesa" />
    </>
  );
};

export default NavBar;
