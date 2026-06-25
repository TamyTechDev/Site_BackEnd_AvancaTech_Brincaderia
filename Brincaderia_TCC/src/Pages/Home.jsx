import { Link } from "react-router-dom";
import { useState } from "react";
import Foto1 from "../img/Foto1.png";
import Foto00 from "../img/Foto00.png";
import Home1 from "../img/Home1.png";
import BarraServico00 from "../img/BarraServico00.png";
import BarraPatrocinio from "../img/BarraPatrocinio.png";
import"../estilizacao/estilo.css";
import Logo1 from "../img/Logo1.png";


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

          <div className=" mt-2 bg-dark p-1">
              <h5 className=" fw-bold text-center text-light  ">
              ENVIAMOS PARA TODO BRASIL 8 % DE DESCONTO NO PIX
              </h5>
          </div>

          

        <div className="d-flex   gap-5 justify-content-center mb-5 ">
          <img 
          src={BarraServico00}
          alt="Imagem com os servicos"
          className="mt-4 img-fluid w-100 "
          />
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
      
      <div className="gap-2 col-3">
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


           

          
      </div>
    
    </>
  );
}

export default Home;