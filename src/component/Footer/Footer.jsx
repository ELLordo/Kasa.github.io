import LogoF from "../Asset/LogoF.svg"
import "../style/Footer.css"


function Footer() {
  return (
    <div className="BackDiv">
       
      <img className="BackImg" src={LogoF} alt="Logo Kasa" />
      <p className="FooterText">© 2020 Kasa. All rights reserved</p> 
    </div>
  );
}

export default Footer;