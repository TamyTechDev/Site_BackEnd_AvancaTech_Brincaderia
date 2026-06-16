import { Link } from "react-router-dom";
import Foto1 from "../img/Foto1.png";
import Foto00 from "../img/Foto00.png";
import Home1 from "../img/Home1.png";
import Barradeservicos from "../img/Barradeservicos.png";
import BarraPatrocinio from "../img/BarraPatrocinio.png";




function Home() {
  return (
    <>
      <div className=" mt-2 ">
       <h5 className=" fw-bold text-center  ">
        ENVIAMOS PARA TODO BRASIL 8 % DE DESCONTO NO PIX
        </h5>
      </div>


    <div class="container text-center">
        <div class="row">
          <div class="col-2">
            <img src={Foto00} alt="" class="w-75"/>
          </div>
          <div class="col-4">
            Pesquisa
          </div>
          <div class="col-6">
            check in
          </div>
        </div>
    </div>
    <div className="container mt-5">
        <div class="container text-center">
            <div class="row">

                <div class="col-4">
                </div>

                <div class="col-2">
                 Tecido
                </div>

                <div class="col-2">
                  Madeira
                </div>
                <div class="col-2">
                  check in
                </div>
                <div class="col-2">
                  Fantasias
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
              CRIAR SLIDE
            </Link>


        

          
      </div>

    </>
      
 

    
  );
}


export default Home;