import BannerHome from "../component/Asset/BannerH.png"
import PropTypes from 'prop-types'
import BDD from "../component/JSON/BDD"
import { Link } from "react-router-dom";
import "../component/style/Card.css"
import "../component/style/Home.css"


const Appartement = BDD

function Card({id, cover, title}) {
    return (
        <div className="CardSpe"> 
        <div className="CardFiltre" />
        <img className="CardImg" src={cover} alt="freelance" />
        <span className="CardTitle">{title}</span>
</div>
)
}

Card.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    cover: PropTypes.string,
}

function Home() {
  return (
    <div>

      <div className="DivHome">
            <img className="ImgHome" src={BannerHome} alt="Paysage de presentation" />
            <h1 className="TitreHome">Chez vous, partout et ailleurs</h1>
      </div>

      <div className="CardGeneral">
        
        {Appartement.map((profile) => (
          
          <Link className="CardLink" key={`${profile.id}`}
                to={`/apparts/${profile.id}`}>

                <Card
                    key={`${profile.id}`}
                    cover={profile.cover}
                    title={profile.title}
                />

          </Link>
            ))}
        
      </div>

    </div>
  );
}

export default Home;
