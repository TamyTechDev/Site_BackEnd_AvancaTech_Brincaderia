import { Link } from "react-router-dom";
import Foto1 from "../img/Foto1.png";
import Foto00 from "../img/Foto00.png";
import Home1 from "../img/Home1.png";
import Barradeservicos from "../img/Barradeservicos.png";
import BarraPatrocinio from "../img/BarraPatrocinio.png";
import Navbar from "../Components/Navbar";

import Tecido1 from "../img/Tecido1.png";
import Tecido2 from "../img/Tecido2.png";
import Tecido3 from "../img/Tecido3.png";
import Tecido4 from "../img/Tecido4.png";
import Tecido5 from "../img/Tecido5.png";
import Tecido6 from "../img/Tecido6.png";

function Tecido() {
  const produtos = [
    { id: 1, nome: "Hortinha", preco: "250,00", img: Tecido1, desc: "Contém milho, brócolis..." },
    { id: 2, nome: "Café da manhã", preco: "80,00", img: Tecido2, desc: "Contém pão sírio, garfo..." },
    { id: 3, nome: "Conto de Fadas", preco: "250,00", img: Tecido3, desc: "Contém itens mágicos..." },
    { id: 4, nome: "Maquiagem", preco: "80,00", img: Tecido4, desc: "Contém batom e espelho..." },
    { id: 5, nome: "Padaria", preco: "200,00", img: Tecido5, desc: "Café de padaria completo..." },
    { id: 6, nome: "Escudo e espada", preco: "230,00", img: Tecido6, desc: "Contém itens de defesa..." }
  ];
  

  return (
    <>
        
    <div style={{ backgroundColor: "rgb(161, 52, 156)" , width: "100%", height:"20%"}}>
  <div className="container ">
    <h1 className="text-warning ">Brinquedos em tecido.</h1>
  </div>
</div>

{/* Segunda Faixa Amarela Transparente */}
<div style={{ backgroundColor: "rgba(255, 193, 7, 0.5)", width:"100%",height:"40%"}}>
  <div className="container">
    <div className="text-light">
    <h2>Nossos kits em tecido para aflorar muita imaginação</h2>
    <p>Nossos brinquedos educativos são feitos com algodão cru 100%...</p>
    </div>
  </div>
</div>
    <div className="container">
      <div className="row">
        {/* O map agora está fechado corretamente com }) */}
        {produtos.map((produto) => (
          <div 
            key={produto.id} 
            className="col-12 col-md-4 d-flex justify-content-center w-40"
          >
            <div className="card" style={{ width: "18rem", margin: "10px" }}> 
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
    </>
  );
}

export default Tecido;