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
`
const ParagErr = styled.span`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 36px;
line-height: 142.6%;
/* or 51px */

display: flex;
align-items: flex-end;
justify-content:center;
color: #FF6060;
`
const LinkErr = styled(Link)`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 142.6%;
/* identical to box height, or 26px */

display: flex;
align-items: flex-end;
text-decoration-line: underline;
justify-content:center;
color: #FF6060;
margin:150px 0px 100px 0px;
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
      <LinkErr path='/'>Retourner sur la page d’accueil</LinkErr>
    </GeneralErr>
  );
}

export default Erreur;