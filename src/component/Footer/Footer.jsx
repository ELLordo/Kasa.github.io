import LogoF from "../Asset/LogoF.svg"
import styled from 'styled-components'

const BackImg = styled.div`
background-color: #000000;`

function Footer() {
  return (
    <BackImg>
        
      <img src={LogoF} alt="Logo Kasa" />
      
    </BackImg>
  );
}

export default Footer;