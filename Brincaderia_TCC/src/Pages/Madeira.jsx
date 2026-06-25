import { Link } from "react-router-dom";
import { useState } from "react";
import Foto1 from "../img/Foto1.png";
import Foto00 from "../img/Foto00.png";
import Home1 from "../img/Home1.png";
import Barradeservicos from "../img/Barradeservicos.png";
import BarraPatrocinio from "../img/BarraPatrocinio.png";
import Navbar from "../Components/Navbar";
import Logo1 from "../img/Logo1.png";

import Madeira1 from "../img/Madeira1.png";
import Madeira2 from "../img/Madeira2.png";
import Madeira3 from "../img/Madeira3.png";
import Madeira4 from "../img/Madeira4.png";
import Madeira5 from "../img/Madeira5.png";


function Madeira() {
  const produtos = [
    { id: 1, nome: "Fogão de pinus", preco: "250,00", img: Madeira5, desc: "Material: pinus reflorestado..." },
    { id: 2, nome: "Xilofone", preco: "80,00", img: Madeira2, desc: "Material: pinus reflorestado.." },
    { id: 3, nome: "Comidinhas", preco: "250,00", img: Madeira3, desc: "Material: pinus reflorestado.." },
    { id: 4, nome: "Torre Montessoriana", preco: "80,00", img: Madeira4, desc: "Material: pinus reflorestado.." },
    { id: 5, nome: "Material dourado", preco: "200,00", img: Madeira1, desc: "Material: pinus reflorestado.." },
    
  ];
  
  const [termoAssine, setTermoAssine] = useState('');
  
  const handleBuscar = () => {
    if (termoAssine.trim() === '') {
      alert('Seu melhor e-mail');
      return;
    }
    console.log('Buscando por:', termoAssine);
  };



  return (
    <>
    
    <div>
      <div className="container" style={{ backgroundColor: "rgb(161, 52, 156)" }}>
        <div className="container mb-3 p-3 gap-3">
          <div className="row">
            <div className="d-flex col-6 col-md-9 gap-4">
              <h5 className="text-light mb-3">Inscreva-se no Clube Ciranda no mês de Julho e Ganhe 20% OFF para fazer parte do clube</h5>

             
            <div className="input-group mb-3 gap-4">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Seu melhor e-mail"
                  value={termoAssine}
                  onChange={(e) => setTermoAssine(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleBuscar()}
                />

                <button className="btn btn-outline-warning " type="button" onClick={handleBuscar}>

                  Assinar

                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     

      {/* Imagem destaque */}
      <div className="container mt-4">
        <img src={Madeira1} alt="Destaque" className="img-fluid w-100" />
      </div>
  <div className="d-flex container justify-content-center">
      <div className="row">
        {produtos.map((produto) => (
          <div 
  key={produto.id} 
  className="col-12 col-md-4 d-flex justify-content-center" // Responsivo: 1 coluna no mobile, 3 no desktop
>
        <div className="card" style={{ width: "100%", margin: "10px" }}> 
          <img src={produto.img} className="card-img-top" alt={produto.nome} />
          <div className="card-body shadow">
            <h5 className="card-title">{produto.nome}</h5>
            <p className="card-text">{produto.desc}</p>
            <a href="./Carrinho" className="btn btn-success">Add R$:{produto.preco}</a>
          </div>
        </div>
      </div>
      
        ))}
      </div>

       </div>
      
      <div className="mb-5">
        <img 
                  src={BarraPatrocinio}
                  alt="Imagem com os patrocinadores"
                  className="mt-4 img-fluid rounded shadow w-100 "
                  />
      </div>
      <footer>
          <div className="d-flex   justify-content-center">
          <div className="row  ">
            <div className="gap-2 col-3 align-items-center justify-content-center">
              <img
              src={Logo1}
                alt="..."
                className="mt-4 img-fluid rounded  w-50 "
              
              />
              
      
            </div>
            
            <div className="justify-content-center col-3">
              <h6>Quem somos</h6>
              <p>O clube Ciranda</p>
              <p>Al. dos Maracatins, 548 - Cj. 04 | Moema 04089-001 | São Paulo-SP</p>
             
      
            </div>
            <div className="gap-2 col-3">
              <h6>Acervo</h6>
              <p>Tecido</p>
              <p>Madeira</p>
              <p>Fantasias</p>
              <p>Joguinho</p>
            </div>
            
            <div className="gap-2 col-3">
              <h6>Divulgação</h6>
              <p>parcerias@brincaderia.com</p>
              <p>imprensa@brincaderia.com</p>
              
      
            </div>
            <div className="col-4">
      
            </div>
            </div>
          </div>
         </footer>
    </>
  );
}

export default Madeira;
