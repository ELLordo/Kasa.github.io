import { Link } from "react-router-dom";
import '../component/style/Err.css'


function Erreur() {
  return (
    
<div className="GeneralErr">
      <div className="NumeroErr">404</div>
      <p className="ParaErr">Oups! La page que vous demandez n'existe pas.</p>
      <Link className="LinkErr" to="/">Retourner sur la page d'accueil</Link>
</div>
);
}

export default Erreur;