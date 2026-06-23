import { Link } from "react-router-dom";
import { useState } from "react";
import Foto1 from "../img/Foto1.png";
import Foto00 from "../img/Foto00.png";
import Home1 from "../img/Home1.png";
import Barradeservicos from "../img/Barradeservicos.png";
import BarraPatrocinio from "../img/BarraPatrocinio.png";
import"../estilizacao/estilo.css";


function Home() {
  
  return (
    <>
     
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
            </Link>
    

          
      </div>
    
    </>
  );
}

export default Home;