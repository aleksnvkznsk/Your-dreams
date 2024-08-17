import "./Navbar.css";
import logo from "./../../assets/logo.png"

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
            <img src={logo} alt=""/>
          <p className="logo__text">Hounter</p>
        </div>
        <div className="buttons">
            <button className="button">About Us</button>
            <button className="button">Article</button>
            <button className="button">Property</button>
            <button className="button__green">Sing Up!</button>
        </div>
      </div>
    </>
  );
}
export default Navbar;
