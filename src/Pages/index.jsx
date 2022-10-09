import styled from "styled-components";
import BannerHome from "../component/Asset/BannerH.png"
import PropTypes from 'prop-types'
import BDD from "../component/JSON/BDD"
import { Link } from "react-router-dom";


const ImgHome= styled.img`
border-radius: 25px;
width:100%;
background: #000000;
mix-blend-mode: darken;
filter: brightness(70%)
`

const DivHome = styled.div`
display:flex;
justify-content:center;
margin:60px;
`

const TitreHome = styled.h1`
position:absolute;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 48px;
line-height: 142.6%;
margin-top: 6%;
color: #FFFFFF;
`

const CardGeneral= styled.div`
display:flex;
flex-flow:row wrap;
columns : auto 3;
justify-content:space-evenly;
`

const CardSpe = styled.div`
display:flex;
flex-flow:column;
height:400px;
width: 100%;
margin:10px 10px 40px 10px;
background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
border-radius:10px;
text-decoration:none;
`
const Appartement = BDD

const CardLink = styled(Link)`
display:flex;
height:400px;
width: 27%;
margin:10px 10px 40px 10px;
border-radius:10px;
text-decoration:none;`

const CardImg = styled.img`
display:flex;
width:100%;
height:100%;
border-radius:10px
`
const CardFiltre = styled.div`
display:flex;
position:absolute;
height:400px;
width: 25.6%;
background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
border-radius:10px;
`
const CardTitle = styled.span`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 142.6%;
display: flex;
align-items: flex-end;
width:70%;
margin-left:15px;
color: #FFFFFF;
margin-top:-60px;
z-index:1
`

function Card({id, cover, title}) {
    return (
        <CardSpe >
          <CardFiltre />
            <CardImg src={cover} alt="freelance" />
            
            <CardTitle>{title}</CardTitle>
        </CardSpe>
    )
}

Card.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    cover: PropTypes.string,
}

function Home() {
  return (
    <div>

      <DivHome>
        <ImgHome src={BannerHome} alt="Paysage de presentation" />
        <TitreHome>Chez vous, partout et ailleurs</TitreHome>
      </DivHome>

      <CardGeneral>
        
        {Appartement.map((profile) => (
          
          <CardLink key={`${profile.id}`}
                to={`/apparts/${profile.id}`}>

                <Card
                    key={`${profile.id}`}
                    cover={profile.cover}
                    title={profile.title}
                />

          </CardLink>
            ))}
        
      </CardGeneral>

    </div>
  );
}

export default Home;
