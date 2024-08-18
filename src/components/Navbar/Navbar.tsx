import "./Navbar.scss";
import logo from "./../../assets/logo.png"

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
            <img className="navbar__logo__img" src={logo} alt=""/>
          <p className="navbar__logo__text">Hounter</p>
        </div>
        <div className="navbar__buttons">
            <button className="navbar__buttons__button">Article</button>
            <button className="navbar__buttons__button">About Us</button>
            <button className="navbar__buttons__button">Property</button>
            <button className="navbar__buttons__button__green">Sing Up!</button>
        </div>
      </div>
    </>
  );
}
export default Navbar;
