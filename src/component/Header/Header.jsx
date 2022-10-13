import LogoP from "../Asset/LogoP.svg"
import { Link } from "react-router-dom";
import "../style/Header.css"

function Header() {
  return (
    <div className="HeaderDiv">
    <img className="ImgHeader" src={LogoP} alt="Logo Kasa" />
    <nav className="NavHeader">
        <Link className="LinkHeaderA" to="/">Accueil</Link>
        <Link className="LinkHeaderP" to="/apropos">A Propos</Link>
    </nav>
</div>
  );
}

export default Header;