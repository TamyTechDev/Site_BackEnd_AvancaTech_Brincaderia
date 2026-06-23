import { Link } from "react-router-dom";
import { useState } from "react";
import Foto1 from "../img/Foto1.png";
import Foto00 from "../img/Foto00.png";
import Home1 from "../img/Home1.png";
import Barradeservicos from "../img/Barradeservicos.png";
import BarraPatrocinio from "../img/BarraPatrocinio.png";
import"../estilizacao/estilo.css";



function Home() {
  const [termoBusca,setTermoBusca] = useState('');

  const handleBuscar = () =>{
    
    if (termoBusca.trim() === ''){
alert('Digita algo pra buscar');
        return;
    };
    console.log('Buscando por:', termoBusca);


  };
  return (
    <>
      <div className=" mt-2 bg-dark p-1">
       <h5 className=" fw-bold text-center text-light  ">
        ENVIAMOS PARA TODO BRASIL 8 % DE DESCONTO NO PIX
        </h5>
      </div>


    <div className="container-fluid m-2">
        <div className="row align-items-center">
          <div className="col-2 text-center">
            <img src={Foto00} alt="" className="w-50"/>
          </div>


          <div className="col-7">
            <form className="d-flex" role="search">
             <input 
             className="form-control me-2 text-secondary" 
             type="text" 
             placeholder="O que você procura?"
             value={termoBusca} 
             onChange={(e) =>setTermoBusca(e.target.value)}
             onKeyDown={(e)=> e.key ==='Enter'&& handleBuscar()}
            />
           
            <button
            className="btn btn-outline-success"
            type="button"
            onClick={handleBuscar}
          >
            Buscar
           </button>
          </form>
          </div>
            
          <div className="col-3">
            <div className="d-flex justify-content-center align-items-center gap-3">
              <Link to="/login" className="text-decoration-none text-secondary">
              <span> 👤Entrar</span>
              </Link>
              <Link to="/Carrinho" className="text-decoration-none text-secondary">
                <span>🛒 (0)</span>
              </Link>
            </div>
          </div>
        </div>
    </div>
    <div className="container mt-7 p-3 justify-content-end ">
        <div class="container text-center">
            <div className="row">

                <div className="col-4">
                </div>

                <div className="col-2">
                  <Link to="/Tecido"className="text-decoration-none text-secondary">Tecido</Link>
                 
                </div>

                <div className="col-2">
                   <Link to="/Tecido"className="text-decoration-none text-secondary">Madeira</Link>
                </div>
                <div className="col-2 ">
                 <Link to="/Fantasias"className="text-decoration-none text-secondary">Fantasias</Link>
                </div>
                <div className="col-2">
                 <Link to="/Joguinho"className="text-decoration-none text-secondary">Joguinho</Link> 
                </div>
            </div>
        </div>
      </div>

  <div>
  <div className="d-flex gap-5 justify-content-center mb-5 ">
          <img 
          src={Home1}
          alt="Coleção Nova"
          className="mt-4img-fluid rounded shadow"
          />
          </div>

          <div className="mb-5">
          <img 
          src={BarraPatrocinio}
          alt="Imagem com os patrocinadores"
          className="mt-4 img-fluid rounded shadow w-100 "
          />
          </div>

        <div className="d-flex gap-5 justify-content-center mb-5">
          <img 
          src={Barradeservicos}
          alt="Imagem com os servicos"
          className="mt-4 img-fluid rounded shadow"
          />
          </div>


            <Link
              to="/produtos"
              className="btn btn-body-emphasis btn-lg "
            >
             teste
            </Link>
    

          
      </div>
    
    </>
  );
}

export default Home;