import React from "react";
import { useState } from "react";
import flecheGauche from "../Asset/flecheGauche.svg";
import flecheDroite from "../Asset/flecheDroite.svg";
import "../style/Carrousel.css"

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


  return (pictures.length === 1)  ? ( <section>
    <img className="ImgCarrousel" src={pictures[currentIndex]} alt="" />
    </section>
  ) : (
    <section>
    <img className="ImgCarrousel" src={pictures[currentIndex]} alt="" />
    <div className="FlecheDirect">
      <img className="FlecheSty"
        src={flecheGauche}
        alt="Flèche vers la gauche"
        onClick={precedent}
      />
     
     <img className="FlecheSty"
        src={flecheDroite}
        alt="Flèche vers la droite"
        onClick={goToNext}
      />
      
      </div> 
      <span className="NombreImg">
        {currentIndex + 1}/{pictures.length}
      </span>
    </section>
  ) 
};

export default Carousel;