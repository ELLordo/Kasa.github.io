import { Link } from "react-router-dom";
import styled from "styled-components";

const NumeroErr = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 288px;
line-height: 142.6%;
display: flex;
align-items: center;
text-align: center;
justify-content:center;
color: #FF6060;
@media (max-width: 960px) {
  font-size:96px;
  margin-top:100px;
}
`
const ParagErr = styled.span`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 36px;
line-height: 142.6%;
display: flex;
align-items: flex-end;
justify-content:center;
color: #FF6060;
@media (max-width: 960px) {
  font-size:18px;
  text-align:center;
  
}
`
const LinkErr = styled(Link)`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 142.6%;
display: flex;
align-items: flex-end;
text-decoration-line: underline;
justify-content:center;
color: #FF6060;
margin:150px 0px 100px 0px;
@media (max-width: 960px) {
  font-size:14px;
}
`

const GeneralErr = styled.div`
display:flex;
flex-flow:column wrap;
margin-top:50px;
`

function Erreur() {
  return (
    <GeneralErr >
      <NumeroErr>404</NumeroErr>
      <ParagErr>Oups! La page que vous demandez n'existe pas.</ParagErr>
      <LinkErr to="/">Retourner sur la page d’accueil</LinkErr>
    </GeneralErr>
  );
}

export default Erreur;