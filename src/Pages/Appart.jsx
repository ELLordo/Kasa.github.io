import React from "react";
import { useState } from "react";
import { useParams, Navigate  } from "react-router-dom";
import BDD from "../component/JSON/BDD";
import PropTypes from "prop-types"
import EtoileP from '../component/Asset/EtoileP.svg'
import EtoileV from '../component/Asset/EtoileV.svg'
import Carrousel from '../component/Carrousel/Carrousel'
import flecheHaut from '../component/Asset/flecheHaut.svg'
import flecheBas from '../component/Asset/flecheBas.svg'
import "../component/style/Host.css"
import "../component/style/Collaspe.css"
import "../component/style/Appart.css"

function Exist(){

const { id } = useParams()
console.log(id, "id de l url")
const allIds = BDD.map(el => { return {id: el.id} })
console.log(allIds ,"Array de tout les id")
const Exist = allIds.find((el => el.id === id ))
console.log(Exist, "id retrouver dans le JSON")

const NavigateErr= () => {
  return(
    <div>
      <Navigate replace to="/Err" />
    </div>
  )
}
return(!Exist ? (<div>
  <NavigateErr />
</div>
) : (
<Appart />)
)
}

function Host({name, picture}) {
    return(<div>
    <div className="ProfileAppart">
            <span className="NameAppart">{name}</span>
            <img className="ImgAppart" src={picture} alt="Propriétaire" />
    </div>
</div>
    )
}
Host.propTypes={
host:PropTypes.string,    
}

function Appart({props, title, cover, pictures, description, rating, location, equipments, tags, index}) {

const { id } = useParams();
const profile = BDD.find((item) => item.id === id)

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
    <div className="CollaspGeneral">
      <div className="CollaspDiv">
          <button className="CollaspButton" onClick={toggleD}>
                  <p className="CollaspTitleB">Description</p>
                  <div>
                        {openD === true ? (
                              <img className="ImgFleche" src={flecheHaut} alt="Fleche vers le haut" />
                              ) : (
                              <img className="ImgFleche" src={flecheBas} alt="Fleche vers le Bas" />
                              )}
                  </div>
            </button>
            {openD && (
                  <div>
                      <p className="CollaspPara" key={profile.description + index}>{profile.description}</p>
                  </div>
            )}
            </div>


      <div className="CollaspDiv">
            <button className="CollaspButton" onClick={toggleE}>
                  <p className="CollaspTitleB">Équipements</p>
                  <div>
                      {openE === true ? (
                              <img className="ImgFleche" src={flecheHaut} alt="Fleche vers le haut" />
                              ) : (
                              <img className="ImgFleche" src={flecheBas} alt="Fleche vers le Bas" />
                              )}
                  </div>
              </button>
                      {openE && (
                  <div>
                        <ul className="CollaspUl">
                            {profile.equipments?.map((equipment,index) => (
                                <li className="CollaspLi" key={`${equipment + index}`}>
                                {equipment}</li>
                        ))}
                        </ul>
                    </div>
            )}
            </div>
</div>
  )
}

  return (
    <div>
        <Carrousel pictures={profile.pictures} />
  
        <div className="OrgSousPictures">
            <div className="SousPictures">
                    <div className="NameYLocation">
                          <h1 className="TitleAppart">{profile.title}</h1>
                          <h2 className="LocationAppart">{profile.location}</h2>
                    </div>
                    <ul className="TagAppart">
                            {profile.tags?.map((tag,index) => (
                            <li className="TagDif" key={`${index + tag}`}>
                              {tag}
                            </li>
                          ))}
                      </ul>
                    </div>
  
  
        <div className="HostYNote">
  
        <Host
        key={`${profile.id}`}
        name={profile.host.name}
        picture={profile.host.picture}
        />
  
        <span className="StarAppart">{stars}</span>
  
        </div>
  </div>
  
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
  tags:PropTypes.array,
 }

export default Exist;


