import BannerP from '../component/Asset/BannerP.png'
import { useState } from 'react'
import flecheHaut from '../component/Asset/flecheHaut.svg'
import flecheBas from '../component/Asset/flecheBas.svg'
import "../component/style/Collaspe.css"
import "../component/style/Propos.css"


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
      <button className="CollaspButton" onClick={toggleF}>
        <p className="CollaspTitle">Fiabilité</p>
        <div>
          {/* Changer le sens de la flèche quand le contenu est ouvert ou fermé */}
          {openF === true ? (
            <img className="ImgFleche" src={flecheHaut} alt="Flèche vers le haut" />
          ) : (
            <img className="ImgFleche" src={flecheBas} alt="Flèche vers le bas" />
          )}
        </div>
      </button>
      {openF && (
      <div >
        <p className="CollaspPara">Les annonces postées sur Kasa garantissent une fiabilité totale.
           Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
      </div>
    )}
    </div>

    <div>
      <button className="CollaspButton" onClick={toggleR}>
        <p className="CollaspTitle">Respect</p>
        <div>
          {/* Changer le sens de la flèche quand le contenu est ouvert ou fermé */}
          {openR === true ? (
            <img className="ImgFleche" src={flecheHaut} alt="Flèche vers le haut" />
          ) : (
            <img className="ImgFleche" src={flecheBas} alt="Flèche vers le bas" />
          )}
        </div>
        </button>
      {openR && (
      <div >
        <p className="CollaspPara">La bienveillance fait partie des valeurs fondatrices de Kasa.
          Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
      </div>
    )}
    </div>

    <div>
      <button className="CollaspButton" onClick={toggleSE}>
        <p className="CollaspTitle">Service</p>
        <div>
          {/* Changer le sens de la flèche quand le contenu est ouvert ou fermé */}
          {openSE === true ? (
            <img className="ImgFleche" src={flecheHaut} alt="Flèche vers le haut" />
          ) : (
            <img className="ImgFleche" src={flecheBas} alt="Flèche vers le bas" />
          )}
        </div>
        </button>
      {openSE && (
      <div >
        <p className="CollaspPara">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
          N'hésitez pas à nous contacter si vous avez la moindre question.</p>
      </div>
    )}
    </div>

      <div>
      <button className="CollaspButton" onClick={toggleSEC}>
        <p className="CollaspTitle">Sécurité</p>
        <div>
          {/* Changer le sens de la flèche quand le contenu est ouvert ou fermé */}
          {openSEC === true ? (
            <img className="ImgFleche" src={flecheHaut} alt="Flèche vers le haut" />
          ) : (
            <img className="ImgFleche" src={flecheBas} alt="Flèche vers le bas" />
          )}
        </div>
        </button>
      {openSEC && (
      <div >
        <p className="CollaspPara">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.
           En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
           Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
      </div>
    )}
    </div>

    </div>
  )
}


function Propos() {
  return (
    <div>
      <div className="ImgDiv" >
        <img className="PropoImg" src={BannerP} alt="Paysage" />
      </div>
      <div className="CollaspDivP">
        <CollapsePropos />
      </div>
    </div>
  );
}

export default Propos;