import ThemeContext from "../../context/themeContext";
import heroImg from "../../assets/phone.svg";
import "./hero.css";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className="hero" data-theme={theme}>
      <div className="container --grid-15">
        <div className="hero-text">
          <h1>Shop,Ecom</h1>
          <p>
          Lorem ipsum is placeholder text commonly used in the graphic, print, 
          and publishing industries for previewing layouts and visual mockups.
          </p>
          <div className="--flex-start">
            <button className="--btn btn-video">buy now</button>
            <button className="--btn --btn-danger">Sign Up</button>
          </div>
        </div>
        <div className="--text-center">
          <img src={heroImg} alt="hero" width={180} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
