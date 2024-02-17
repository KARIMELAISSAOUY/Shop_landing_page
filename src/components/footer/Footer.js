import { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import "./footer.css";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className="--flex-center" data-theme={theme}>
      <p>KRM &copy; 2024</p>
    </footer>
  );
};

export default Footer;
