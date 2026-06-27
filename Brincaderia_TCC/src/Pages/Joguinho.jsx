import { Link } from "react-router-dom";
import { useState } from "react";
import Foto1 from "../img/Foto1.png";
import Foto00 from "../img/Foto00.png";
import Home1 from "../img/Home1.png";
import Barradeservicos from "../img/Barradeservicos.png";
import BarraPatrocinio from "../img/BarraPatrocinio.png";
import Navbar from "../Components/Navbar";
import Logo1 from "../img/Logo1.png";

import VelhaMilho from "../img/VelhaMilho.png";
import VelhaBeringela from "../img/VelhaBeringela.png";
import VelhaFundo from "../img/VelhaFundo.png";
import VelhaRiscoD from "../img/VelhaRiscoD.png";
import VelhaRiscoR from "../img/VelhaRiscoR.png";

import "./Joguinho.css";

function Joguinho() {
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
  const [jogadorAtual, setJogadorAtual] = useState('milho');
  const [vencedor, setVencedor] = useState(null);
  const [linhaVencedora, setLinhaVencedora] = useState(null);

 const checaVitoria = (novoTabuleiro) => {
  const linhas = [
    {pos: [0, 1, 2], tipo: 'horizontal1'},
    {pos: [3, 4, 5], tipo: 'horizontal2'},
    {pos: [6, 7, 8], tipo: 'horizontal3'},
    {pos: [0, 3, 6], tipo: 'vertical1'},
    {pos: [1, 4, 7], tipo: 'vertical2'},
    {pos: [2, 5, 8], tipo: 'vertical3'},
    {pos: [0, 4, 8], tipo: 'diagonal1'}, // ← VelhaRiscoD
    {pos: [2, 4, 6], tipo: 'diagonal2'} // ← VelhaRiscoD2
  ];

  for (let linha of linhas) {
    const [a, b, c] = linha.pos;
    if (novoTabuleiro[a] &&
        novoTabuleiro[a] === novoTabuleiro[b] &&
        novoTabuleiro[a] === novoTabuleiro[c]) {
      setVencedor(novoTabuleiro[a]);
      setLinhaVencedora(linha.tipo);
      return true;
    }
  }
  setLinhaVencedora(null);
  return false;
}

  function jogar(posicao) {
    if (tabuleiro[posicao] || vencedor) return;

    const novoTabuleiro = [...tabuleiro];
    novoTabuleiro[posicao] = jogadorAtual;
    setTabuleiro(novoTabuleiro);

    if (!checaVitoria(novoTabuleiro)) {
      setJogadorAtual(jogadorAtual === 'milho'? 'beringela' : 'milho');
    }
  }

  function reiniciar() {
    setTabuleiro(Array(9).fill(null));
    setJogadorAtual('milho');
    setVencedor(null);
    setLinhaVencedora(null); // ← LIMPA O RISCO TAMBÉM
  }

 
    <div className="jogo-container">
      <div className="casa-container">
        {tabuleiro.map((casa, index) => (
          <div key={index} className="casa" onClick={() => jogar(index)}>
            {casa === 'milho' && <img src="VelhaMilho.png" alt="milho" />}
            {casa === 'beringela' && <img src="VelhaBeringela.png" alt="beringela" />}
          </div>
        ))}
      </div>

      {/* RISCOS DE VITÓRIA */}
      {/* HORIZONTAL - USA VelhaRiscoR */}
{vencedor && linhaVencedora === 'horizontal1' && (
  <img src="VelhaRiscoR.png" className="risco" alt="risco" />
)}
{vencedor && linhaVencedora === 'horizontal2' && (
  <img src="VelhaRiscoR.png" className="risco" alt="risco" />
)}
{vencedor && linhaVencedora === 'horizontal3' && (
  <img src="VelhaRiscoR.png" className="risco" alt="risco" />
)}
{/* VERTICAL - USA VelhaRiscoV */}
{vencedor && linhaVencedora === 'vertical1' && (
  <img src="VelhaRiscoV.png" className="risco" alt="risco" />
)}
{vencedor && linhaVencedora === 'vertical2' && (
  <img src="VelhaRiscoV.png" className="risco" alt="risco" />
)}
{vencedor && linhaVencedora === 'vertical3' && (
  <img src="VelhaRiscoV.png" className="risco" alt="risco" />
)}

{/* DIAGONAL \ - USA VelhaRiscoD */}
{vencedor && linhaVencedora === 'diagonal1' && (
  <img src="VelhaRiscoD.png" className="risco" alt="risco" />
)}

{/* DIAGONAL / - USA VelhaRiscoD2 */}
{vencedor && linhaVencedora === 'diagonal2' && (
  <img src="VelhaRiscoD2.png" className="risco" alt="risco" />
)}
    </div>



return (
    <>
    <div>

    <div className="container" style={{ backgroundColor: "rgb(161, 52, 156)" }}>
        <div className="container mb-3 p-3 gap-3">
          <div className="row">
            <div className="d-flex col-6 col-md-9 gap-4">
              <h5 className="text-light mb-3">JOGINHOS DO BRINCADERIA</h5>
            </div>
          </div>
        </div>
       </div> 
    </div>
  
  <div>
      <div className="joguinho">
      <h1>Feirinha do Brincaderia 🌽🍆</h1>

     
      <div className="tabuleiro" style={{ backgroundImage: `url(${VelhaFundo})` }}>
  <div className="casa-container"> {/* ← adiciona essa div */}
    {tabuleiro.map((valor, i) => (
      <div key={i} className="casa" onClick={() => jogar(i)}>
        {valor === 'milho' && <img src={VelhaMilho} alt="Milho" />}
        {valor === 'beringela' && <img src={VelhaBeringela} alt="Beringela" />}
      </div>
    ))}
  </div>

  {vencedor && <img src={VelhaRiscoR} className="risco" alt="Risco" />}
</div>
      <button onClick={reiniciar} className="btn-reiniciar">
        Jogar Novamente
      </button>
    </div>

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
export default Joguinho;