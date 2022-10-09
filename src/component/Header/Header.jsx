import LogoP from "../Asset/LogoP.svg"
import styled from "styled-components";
import { Link } from "react-router-dom";

const ImgHeader = styled.img`
padding-top:40px;
padding-left:40px
`

const LinkHeaderA = styled(Link)`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 142.6%;

display: flex;
flex-flow:row;
text-decoration:none;
align-items: flex-end;
text-align: right;

color: #FF6060;

&:hover{
  text-decoration:underline;
}
`

const LinkHeaderP = styled(Link)`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 142.6%;

display: flex;
flex-flow:row;
text-decoration:none;
align-items: flex-end;
text-align: right;

color: #FF6060;

&:hover{
  text-decoration:underline;
}
`

const NavHeader= styled.nav`
display:flex;
flex-flow:row;
justify-content: space-evenly;
box-sizing: border-box;
width: 25%;
`

const HeaderDiv=styled.div`
display:flex;
flex-flow:row;
justify-content:space-between;
`

function Header() {
  return (
    <HeaderDiv >
      <ImgHeader src={LogoP} alt="Logo Kasa" />
      <NavHeader>
      <LinkHeaderA to="/">Accueil</LinkHeaderA>
      <LinkHeaderP to="/apropos">A Propos</LinkHeaderP>
      </NavHeader>
    </HeaderDiv>
  );
}

export default Header;