import logo from "../assets/images/logo.svg";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="flex place-content-berween justify-between mb-5">
      <img className="cursor-pointer" src={logo} alt="logo" />
      <NavBar />
    </header>
  );
};

export default Header;
