import { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import logo from "../../assets/logo.png";
import { FaMoon, FaSun } from "react-icons/fa";
import "./header.css";

const Header = () => {
  const { theme, toggleTheme, switchBtn } = useContext(ThemeContext);
  return (
    <header data-theme={theme}>
      <div className="container --flex-between">
        <div className="logo">
          <img src={logo} alt="logo" width={160} />
        </div>
        <nav>
          <ul className="--flex-between">
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">SHOP</a>
            </li>
          </ul>
        </nav>
        <div onClick={toggleTheme}>
          <span className="toggle-btn">
            <FaMoon color="pink" size={18} />
            <FaSun color="yellow" size={18} />
            <div className={switchBtn ? "ball move" : "ball"}></div>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
