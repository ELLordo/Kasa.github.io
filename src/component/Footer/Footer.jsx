import LogoF from "../Asset/LogoF.svg"
import styled from 'styled-components'

const BackDiv = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-flow:column;
background-color: #000000;
Width :100%;
Height:209px;

`

const BackImg =styled.img`
display: flex;
justify-content: center;
width: 122px;
height: 40px;
padding-top:40px;
@media (max-width: 960px) {
  width:30%;
  height:40px;
}
`
const FooterText = styled.p`

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 142.6%;
display: flex;
align-items: flex-end;
text-align: center;
color: #FFFFFF;
@media (max-width: 960px) {
  font-size:12px;
}
`

function Footer() {
  return (
    <BackDiv>
        
      <BackImg src={LogoF} alt="Logo Kasa" />
      <FooterText>© 2020 Kasa. All rights reserved</FooterText> 
    </BackDiv>
  );
}

export default Footer;