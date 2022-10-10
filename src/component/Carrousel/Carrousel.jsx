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
@media (max-width: 960px) {
  width:12px;
  height:20px;
}
`

const ImgCarrousel = styled.img`
border-radius:25px;
width: 90%;
height: 550px;
object-fit: cover;
margin: 100px 5% 50px 5%;
position: static;
@media (max-width: 960px) {
  width:95%;
  height:255px;
  margin: 40px 2.5% 30px 2.5%;
}
`
const FlecheDirect = styled.div`
display:flex;
z-index:1;
margin-top:-350px;
box-sizing: border-box;
width: 75%;
justify-content: space-between;
margin-left: 12%;
@media (max-width: 960px) {
  margin-top:-170px;
}
`

const NombreImg=styled.span`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 142.6%;
display: flex;
margin-top: 150px;
box-sizing: border-box;
width: 100%;
justify-content: center;
color: #FFFFFF;
@media (max-width: 960px) {
  display:none;
}
`

  return (pictures.length === 1)  ? ( <section>
    <ImgCarrousel src={pictures[currentIndex]} alt="" />
    </section>
  ) : (
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
  ) 
};

export default Carousel;