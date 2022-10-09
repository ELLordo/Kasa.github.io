import React from "react";
import { useState } from "react";
import { useParams  } from "react-router-dom";
import BDD from "../component/JSON/BDD";
import PropTypes from "prop-types"
import EtoileP from '../component/Asset/EtoileP.svg'
import EtoileV from '../component/Asset/EtoileV.svg'
import styled from 'styled-components'
import Carrousel from '../component/Carrousel/Carrousel'
import flecheHaut from '../component/Asset/flecheHaut.svg'
import flecheBas from '../component/Asset/flecheBas.svg'

const NameAppart= styled.span`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 142.6%;
display: flex;
align-items: flex-end;
text-align: right;
color: #FF6060;
width:50%;
margin-right:10px
`
const ImgAppart= styled.img`
border-radius:64px;
width:64px;
height:64px;
`

const ProfileAppart= styled.div`
display:flex;
flex-flow:row;
justify-content: flex-end;
margin-top:10px;
`

const TitleAppart=styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 36px;
line-height: 142.6%;
display: flex;
margin-bottom:-15px;
color: #FF6060;
`

const NameYLocation = styled.div`
display:flex;
flex-flow:column;
`

const LocationAppart = styled.h2`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 142.6%;
display: flex;
color: #FF6060;
`

const SousPictures=styled.div`
display: flex;
justify-content: space-between;
margin: 100px 60px 20px 20px;
width:80%;
margin-left:10%;
flex-flow:column;
@media (max-width: 960px) {
  margin: 150px 0px 30px 0px;
}
`

const HostYNote= styled.div`
display: flex;
flex-flow:column nowrap;
justify-content:flex-end;
margin: 10px 60px 20px 20px;
width:20%;
margin-left:10%;

`

const StarAppart=styled.span`
display:flex;
justify-content:flex-end;
width:30px;
height:30px;
`

const TagAppart= styled.ul`
display:flex;
flex-flow:row nowrap;
margin-right:10px;

`

const TagDif= styled.li`
display:flex;
margin-right:20px;
`

const CollaspPara = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 142.6%;
color: #FF6060;
display:flex;
justify-content:center;
`

const CollaspButton= styled.button`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 142.6%;
display: flex;
align-items: center;
color: #FFFFFF;
background: #FF6060;
border-radius: 5px;
border:0;
width:100%;
margin-top:20px;
justify-content:space-between;
`
const CollaspTitleB = styled.p`
display:flex;
margin:0;
height:52px;
align-items:center;
`

const CollaspDiv = styled.div`
display:block;
margin: 20px 10% 100px;
width:40%;

`

const CollaspGeneral = styled.div`
display:flex;
flex-flow:row nowrap;
justify-content:space-between;
`

const CollaspUl = styled.ul`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 142.6%;
color: #FF6060;
display:flex;
`

function Host({name, picture}) {
    return(<div>

      <ProfileAppart>
          <NameAppart>{name}</NameAppart>
          <ImgAppart src={picture} alt="Photo du proprietaire"></ImgAppart>
      </ProfileAppart>
      
      </div>
    )
}
Host.propTypes={
host:PropTypes.string,    
}

const CollaspAppart =(description, equipements, content) => {
  const [openD, setOpenD] = useState(false);
  const [openE, setOpenE] = useState(false);

  const toggleD = () => {
    setOpenD(!openD);
  }

  const toggleE = () => {
    setOpenE(!openE)
  }

  return(
    <CollaspGeneral>
      <CollaspDiv>
      <CollaspButton onClick={toggleD}>
        <CollaspTitleB>Description</CollaspTitleB>
        <div>
          {/* Changer le sens de la flèche quand le contenu est ouvert ou fermé */}
          {openD === true ? (
            <img src={flecheHaut} alt="Flèche vers le haut" />
          ) : (
            <img src={flecheBas} alt="Flèche vers le bas" />
          )}
        </div>
      </CollaspButton>
      {openD && (
      <div >
        <CollaspPara key={description}>{description}</CollaspPara>
      </div>
    )}
    </CollaspDiv>
    <CollaspDiv>
    <CollaspButton onClick={toggleE}>
        <CollaspTitleB>Équipements</CollaspTitleB>
        <div>
          {/* Changer le sens de la flèche quand le contenu est ouvert ou fermé */}
          {openE === true ? (
            <img src={flecheHaut} alt="Flèche vers le haut" />
          ) : (
            <img src={flecheBas} alt="Flèche vers le bas" />
          )}
        </div>
      </CollaspButton>
      {openE && (
      <div >
        <CollaspUl>{content.map((item) => (
              <li key={item}>{item}</li>
            ))}
        </CollaspUl>
      </div>
    )}
    </CollaspDiv>
    </CollaspGeneral>
  )
}

function Appart({ title, cover, pictures, description, rating, location, equipements, tags, index}) {
const { id } = useParams();
const profile = BDD.find((item) => item.id === id)
console.log(profile.description)
const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < profile.rating) {
      stars.push(<img src={EtoileP} alt="full-star" key={i} />);
    } else {
      stars.push(<img src={EtoileV} alt="empty-star" key={i} />);
    }
  }

  return(
  <div>
    <Carrousel pictures={profile.pictures} />

    <SousPictures>
    <NameYLocation>
    <TitleAppart>{profile.title}</TitleAppart>
    <LocationAppart>{profile.location}</LocationAppart>
    </NameYLocation>
    <TagAppart>
        {profile.tags?.map((tags,index) => (

          <TagDif key={index + profile.tags}>
          {profile.tags} 
          </TagDif>
          ))} 
      </TagAppart>
    </SousPictures>

    
      
      <HostYNote>
        <StarAppart>{stars}</StarAppart>

      <Host
    key={`${profile.id}`} 
    name={profile.host.name}
    picture={profile.host.picture}
    />
      
    </HostYNote>

      <CollaspAppart 
      key={`${profile.equipments+ index}`} 
      item={profile.equipments}
      description={profile.description}
      content={profile}

      />
  </div>
)
}
 Appart.propTypes = {
  title:PropTypes.string,
  cover:PropTypes.string,
  pictures:PropTypes.string,
  description:PropTypes.string,
  rating:PropTypes.number,
  location:PropTypes.string,
  equipements:PropTypes.string,
  tags:PropTypes.arrayOf(PropTypes.string),
 }

export default Appart;