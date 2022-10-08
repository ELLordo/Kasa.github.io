import styled from "styled-components";
import BannerHome from "../component/Asset/BannerHome.svg"

const ImgHome= styled.img`
border-radius: 25px;
width:100%;
background: #000000;
mix-blend-mode: darken;
filter: brightness(70%)
`
const DivHome = styled.div`
display:flex;
justify-content:center;margin:60px;
`

const TitreHome = styled.h1`
position:absolute;

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 48px;
line-height: 142.6%;
left: 30%;
right: 25%;
top: 25%;
color: #FFFFFF;
`

function Home() {
  return (
    
      <DivHome>
        <ImgHome src={BannerHome} alt="Paysage de presentation" />
        <TitreHome>Chez vous, partout et ailleurs</TitreHome>
      </DivHome>
    

  );
}

export default Home;
