import React from "react";
import { useState } from "react";
import { useParams  } from "react-router-dom";
import BDD from "../component/JSON/BDD";
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Carrousel from '../component/Carrousel/Carrousel'

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


`
const TitleAppart=styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 36px;
line-height: 142.6%;

display: flex;
align-items: flex-end;

color: #FF6060;
`

const SousPictures=styled.div`
display: flex;
justify-content: space-between;
margin: 100px 60px 20px 20px;
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

function Appart({ title, cover, pictures, description, rating, location, equipements, tags}) {
const { id } = useParams();
const profile = BDD.find((item) => item.id === id)

  return(
  <div>
    <Carrousel pictures={profile.pictures} />
    <SousPictures>
    <TitleAppart>{profile.title}</TitleAppart>
    <Host
    key={`${profile.id}`} 
    name={profile.host.name}
    picture={profile.host.picture}
    />
    </SousPictures>

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
  tags:PropTypes.string,
 }

export default Appart;