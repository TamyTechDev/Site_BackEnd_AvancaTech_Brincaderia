import { Link } from "react-router-dom";
import { useState } from "react";
import Foto1 from "../img/Foto1.png";
import Foto00 from "../img/Foto00.png";
import Home1 from "../img/Home1.png";
import Barradeservicos from "../img/Barradeservicos.png";
import BarraPatrocinio from "../img/BarraPatrocinio.png";
import Navbar from "../Components/Navbar";
import Logo1 from "../img/Logo1.png";

import Fan1 from "../img/Fan1.png";
import Fan2 from "../img/Fan2.png";
import Fan3 from "../img/Fan3.png";
import Fan4 from "../img/Fan4.png";



function Fantasias() {
  const produtos = [
    { id: 1, nome: "Fogão de pinus", preco: "250,00", img: Fan4, desc: "Material: pinus reflorestado..." },
    { id: 2, nome: "Xilofone", preco: "80,00", img: Fan2, desc: "Material: pinus reflorestado.." },
    { id: 3, nome: "Comidinhas", preco: "250,00", img: Fan3, desc: "Material: pinus reflorestado.." },
    
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
      {/* Cabeçalho */}
      <div style={{ backgroundColor: "rgb(161, 52, 156)" }}>
        <div className="container p-3">
          <div className="row align-items-center">
            <div className="col-12 col-md-9 d-flex gap-4">
              <h5 className="text-light">Inscreva-se no Clube Ciranda!</h5>
              <div className="input-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Seu melhor e-mail"
                  value={termoAssine}
                  onChange={(e) => setTermoAssine(e.target.value)}
                />
                <button className="btn btn-outline-warning" onClick={handleBuscar}>
                  Assinar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid de Imagens */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-8">
            <img src={Fan3} alt="Serviços" className="img-fluid w-100" />
          </div>
          <div className="col-4">
            <img src={Fan4} alt="Serviços" className="img-fluid w-100" />
          </div>
        </div>
      </div>

      {/* Listagem de Produtos */}
      <div className="container my-4">
        <div className="row">
          {produtos.map((produto) => (
            <div key={produto.id} className="col-12 col-md-4 d-flex justify-content-center">
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

      <div className="container mt-4">
        
          <div className="col-12 my-3">
            <img src={Fan1} alt="Serviços" className="img-fluid w-100" />
          </div>
      </div>

      {/* Rodapé e Patrocínio */}
      <div className="container mb-5">
        <img src={BarraPatrocinio} alt="Patrocinadores" className="img-fluid rounded shadow w-100" />
      </div>
      
      <footer className="container py-4">
        <div className="row">
          <div className="col-3">
            <img src={Logo1} alt="Logo" className="img-fluid w-50" />
          </div>
          <div className="col-3">
            <h6>Quem somos</h6>
            <p>O clube Ciranda</p>
          </div>
          <div className="col-3">
            <h6>Acervo</h6>
            <p>Tecido, Madeira, Fantasias, Joguinho</p>
          </div>
          <div className="col-3">
            <h6>Divulgação</h6>
            <p>parcerias@brincaderia.com</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Fantasias;