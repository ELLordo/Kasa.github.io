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
@media (max-width: 960px) {
  font-size:12px;
  margin-right:10px;
  width:40%
}
`
const ImgAppart= styled.img`
border-radius:64px;
width:64px;
height:64px;
@media (max-width: 960px) {
  width:32px;
  height:32px;
}
`

const ProfileAppart= styled.div`
display:flex;
flex-flow:row;
margin-top:10px;
margin-right:40px;
@media (max-width: 960px) {
  margin-right:0;
}

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
@media (max-width: 960px) {
  font-size:18px;
  margin-bottom:0;
  margin-top:-20px;
}
`

const NameYLocation = styled.div`
display:flex;
flex-flow:column;
@media (max-width:960px)
{margin-left:20px;}
`

const LocationAppart = styled.h2`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 142.6%;
display: flex;
color: #FF6060;
@media (max-width: 960px) {
  font-size:14px;
  
}
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
justify-content:space-around;
margin: 10px 60px 20px 20px;
width:20%;
margin-left:10%;
margin-top:70px;
@media (max-width: 960px) {
  flex-flow:row-reverse;
  margin:0px 10px;
  width:100%;
  justify-content:space-between;
  align-items:center;
}
`

const StarAppart=styled.span`
display:flex;
width:30px;
height:30px;
@media (max-width:960px){
  widht:15px;
  height:15px;
}
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
@media (max-width: 960px) {
  font-size:12px;
}

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
@media (max-width: 960px) {
  font-size:13px;
  height:35px;
}
`

const CollaspDiv = styled.div`
display:block;
margin: 20px 10% 100px;
width:100%;
@media (max-width: 960px) {
  width:80%;
  margin:10px 20px 0 20px;
}
`

const CollaspGeneral = styled.div`
display:flex;
flex-flow:row nowrap;
justify-content:space-between;
@media (max-width: 960px) {
  flex-flow:column;
}
`

const CollaspUl = styled.ul`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 142.6%;
color: #FF6060;
display:flex;
@media (max-width: 960px) {
  font-size:12px;
}

`
const ImgFleche=styled.img`
@media (max-width: 960px) {
  width:9px;
  height:15px;
}
`


const OrgSousPictures=styled.div`
display:flex;
flex-flow:row;
@media (max-width: 960px) {
  flex-flow:column;
}

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

function Appart({ title, cover, pictures, description, rating, location, equipments, tags, index}) {
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

  const CollaspAppart =() => {
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
            <ImgFleche src={flecheHaut} alt="Flèche vers le haut" />
          ) : (
            <ImgFleche src={flecheBas} alt="Flèche vers le bas" />
          )}
        </div>
      </CollaspButton>
      {openD && (
      <div >
        <CollaspPara key={profile.description + index}>{profile.description}</CollaspPara>
      </div>
    )}
    </CollaspDiv>
    
    <CollaspDiv>
    <CollaspButton onClick={toggleE}>
        <CollaspTitleB>Équipements</CollaspTitleB>
        <div>
          {/* Changer le sens de la flèche quand le contenu est ouvert ou fermé */}
          {openE === true ? (
            <ImgFleche src={flecheHaut} alt="Flèche vers le haut" />
          ) : (
            <ImgFleche src={flecheBas} alt="Flèche vers le bas" />
          )}
        </div>
      </CollaspButton>
      {openE && (
      <div >
        <CollaspUl>{profile.map((equipments) => (
              <li key={profile.equipments}>{profile.equipments}</li>
            ))}
        </CollaspUl>
      </div>
    )}
    </CollaspDiv>
    </CollaspGeneral>
  )
}
  return(
  <div>
    <Carrousel pictures={profile.pictures} />

    <OrgSousPictures>
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

        <Host
    key={`${profile.id}`} 
    name={profile.host.name}
    picture={profile.host.picture}
    />

        <StarAppart>{stars}</StarAppart>
      
    </HostYNote>
</OrgSousPictures>

    <CollaspAppart />  
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
  equipments:PropTypes.string,
  tags:PropTypes.arrayOf(PropTypes.string),
 }

export default Appart;