import React from 'react'
import * as ReactDOMClient from 'react-dom/client';
import Home from './Pages/index'
import Header from './component/Header/Header'
import Appart from './Pages/Appart'
import Erreur from './Pages/Erreur404'
import Propos from './Pages/APropos'
import Footer from './component/Footer/Footer'
import { BrowserRouter, Routes,  Route} from "react-router-dom"


const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <Routes>
      
        <Route path = "/" element ={<Home />} />
        <Route path = "/apropos" element ={<Propos />} />
        <Route path = "apparts/:id" element ={<Appart />} />
        <Route path = "*" element ={<Erreur />} /> 
      
    </Routes>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
