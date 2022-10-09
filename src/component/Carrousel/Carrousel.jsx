import React from "react";
import { useState } from "react";
import flecheGauche from "../Asset/flecheGauche.svg";
import flecheDroite from "../Asset/flecheDroite.svg";
import styled from 'styled-components'

const Carousel = (props) => {
  const pictures = props.pictures;
  const [currentIndex, setCurrentIndex] = useState(0);

  const precedent = () => {
    const isFirstPicture = currentIndex === 0;
    const newIndex = isFirstPicture ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastPicture = currentIndex === pictures.length - 1;
    const newIndex = isLastPicture ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

const FlecheSty =styled.img`

background-color = #000000
`

const ImgCarrousel = styled.img`
border-radius:25px;
width: 80%;
height: 415px;
object-fit: cover;
margin: 100px 10% 50px 10%;
position: static;
`
const FlecheDirect = styled.div`
display:flex;
z-index:1;
margin-top:-300px;
box-sizing: border-box;
width: 75%;
justify-content: space-between;
margin-left: 12%;
`
const NombreImg=styled.span`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 142.6%;
/* or 26px */

display: flex;
margin-top: 100px;
box-sizing: border-box;
width: 100%;
justify-content: center;

color: #FFFFFF;
`

  return (
    <section>
    <ImgCarrousel src={pictures[currentIndex]} alt="" />
    <FlecheDirect>
      <FlecheSty
        src={flecheGauche}
        alt="Flèche vers la gauche"
        onClick={precedent}
      />
     
      <FlecheSty
        src={flecheDroite}
        alt="Flèche vers la droite"
        onClick={goToNext}
      />
      
      </FlecheDirect> 
      <NombreImg>
        {currentIndex + 1}/{pictures.length}
      </NombreImg>
    </section>
  );
};

export default Carousel;