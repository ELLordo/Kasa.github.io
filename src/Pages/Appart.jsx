import React from "react";
import { useState } from "react";
import { useParams  } from "react-router-dom";
import BDD from "../component/JSON/BDD";
import PropTypes from 'prop-types'
import styled from 'styled-components'

const NameAppart= styled.span`

`
const ImgAppart= styled.img`

`

const DataAppart = BDD 

function Host({name, picture}) {
    return(
      <div>
          <NameAppart>{name}</NameAppart>
          <ImgAppart src={picture} alt="Photo du proprietaire"></ImgAppart>
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
    
    <Host
    key={`${profile.id}`} 
    name={profile.host.name}
    picture={profile.host.picture}
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
  tags:PropTypes.string,

 }
export default Appart;