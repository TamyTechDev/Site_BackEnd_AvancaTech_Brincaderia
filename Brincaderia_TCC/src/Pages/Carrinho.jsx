import { Link } from "react-router-dom";
import Foto1 from "../img/Foto1.png";
import Foto00 from "../img/Foto00.png";
import Home1 from "../img/Home1.png";
import Barradeservicos from "../img/Barradeservicos.png";
import BarraPatrocinio from "../img/BarraPatrocinio.png";
import Navbar from "../Components/Navbar";

import  { useState } from 'react';
import "./Cadastro.css";

function Carrinho (){
return(
    <div className="container mt-5">
        <h1>  Seu Carrinho </h1>
        <p> Ainda vazio... bora comprar!</p>
    </div>
    
);

}
export default Carrinho;