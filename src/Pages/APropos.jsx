import styled from 'styled-components'
import BannerP from '../component/Asset/BannerP.png'
import { useState } from 'react'
import flecheHaut from '../component/Asset/flecheHaut.svg'
import flecheBas from '../component/Asset/flecheBas.svg'

const PropoImg = styled.img`
border-radius: 25px;
width:90%;
object-fit:cover;
background: #000000;
mix-blend-mode: darken;
filter: brightness(70%);
@media (max-width: 960px) {
  width:95%;
  height:223px;
}
`
const ImgDiv =styled.div`
display:flex;
justify-content:center;
margin: 40px 0px 60px 0px;
`
const CollaspDiv = styled.div`
display:block;
margin: 50px 12%;
max-width:80%;
@media (max-width: 960px) {
  max-width:100%;
  margin:-30px 2.5% 0px 2.5%;
}
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
@media (max-width: 960px) {
  font-size:13px;
}
`

const CollaspTitleB = styled.p`
display:flex;
margin:0;
@media (max-width: 960px) {
  margin-left:10px;
  height:20px;
}
`
const ImgFleche=styled.img`
@media (max-width: 960px) {
  width:9px;
  height:15px;
}
`

const CollapsePropos =() => {
  const [openF, setOpenF] = useState(false);
  const [openR , setOpenR] = useState(false);
  const [openSE, setOpenSE] = useState(false);
  const [openSEC, setOpenSEC] = useState(false);

  const toggleF = () => {
    setOpenF(!openF);
  }
  
  const toggleR = () => {
    setOpenR(!openR)
  }

  const toggleSE = () => {
    setOpenSE(!openSE)
  }

  const toggleSEC = () => {
    setOpenSEC(!openSEC)
  }

  return(
    <div>
    <div>
      <CollaspButton onClick={toggleF}>
        <CollaspTitleB>Fiabilité</CollaspTitleB>
        <div>
          {/* Changer le sens de la flèche quand le contenu est ouvert ou fermé */}
          {openF === true ? (
            <ImgFleche src={flecheHaut} alt="Flèche vers le haut" />
          ) : (
            <ImgFleche src={flecheBas} alt="Flèche vers le bas" />
          )}
        </div>
      </CollaspButton>
      {openF && (
      <div >
        <CollaspPara>Les annonces postées sur Kasa garantissent une fiabilité totale.
           Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</CollaspPara>
      </div>
    )}
    </div>

    <div>
      <CollaspButton onClick={toggleR}>
        <CollaspTitleB>Respect</CollaspTitleB>
        <div>
          {/* Changer le sens de la flèche quand le contenu est ouvert ou fermé */}
          {openR === true ? (
            <ImgFleche src={flecheHaut} alt="Flèche vers le haut" />
          ) : (
            <ImgFleche src={flecheBas} alt="Flèche vers le bas" />
          )}
        </div>
        </CollaspButton>
      {openR && (
      <div >
        <CollaspPara>La bienveillance fait partie des valeurs fondatrices de Kasa.
          Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</CollaspPara>
      </div>
    )}
    </div>

    <div>
      <CollaspButton onClick={toggleSE}>
        <CollaspTitleB>Service</CollaspTitleB>
        <div>
          {/* Changer le sens de la flèche quand le contenu est ouvert ou fermé */}
          {openSE === true ? (
            <ImgFleche src={flecheHaut} alt="Flèche vers le haut" />
          ) : (
            <ImgFleche src={flecheBas} alt="Flèche vers le bas" />
          )}
        </div>
        </CollaspButton>
      {openSE && (
      <div >
        <CollaspPara>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
          N'hésitez pas à nous contacter si vous avez la moindre question.</CollaspPara>
      </div>
    )}
    </div>

      <div>
      <CollaspButton onClick={toggleSEC}>
        <CollaspTitleB>Sécurité</CollaspTitleB>
        <div>
          {/* Changer le sens de la flèche quand le contenu est ouvert ou fermé */}
          {openSEC === true ? (
            <ImgFleche src={flecheHaut} alt="Flèche vers le haut" />
          ) : (
            <ImgFleche src={flecheBas} alt="Flèche vers le bas" />
          )}
        </div>
        </CollaspButton>
      {openSEC && (
      <div >
        <CollaspPara>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.
           En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
           Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</CollaspPara>
      </div>
    )}
    </div>

    </div>
  )
}


function Propos() {
  return (
    <div>
      <ImgDiv >
        <PropoImg src={BannerP} alt="Photo de paysage" />
      </ImgDiv>
      <CollaspDiv>
        <CollapsePropos />
      </CollaspDiv>
    </div>
  );
}

export default Propos;