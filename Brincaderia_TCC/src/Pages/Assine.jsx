import { Link } from "react-router-dom";
import Foto1 from "../img/Foto1.png";
import Foto00 from "../img/Foto00.png";
import Home1 from "../img/Home1.png";
import Barradeservicos from "../img/Barradeservicos.png";
import BarraPatrocinio from "../img/BarraPatrocinio.png";




function Assine() {
  return (
    <>
                              <div className=" mt-2 ">
                              <h5 className=" fw-bold text-center  ">
                                ENVIAMOS PARA TODO BRASIL 8 % DE DESCONTO NO PIX
                                </h5>
                              </div>


                              <div className=" mt-5 ">
                              <h1 className=" fw-bold text-center  ">
                                CONFIRA NOSSOS PLANOS DE ASSINATURA
                                </h1>
                              </div>

                              <div className=" mt-5 ">
                              <h1 className=" fw-bold text-center  ">
                                CONFIRA NOSSOS PLANOS DE ASSINATURA
                                </h1>
                              </div>


                             <div class="container text-center">
                                <div class="row">
                                <div class="col-2">
                                  <img 
                                src={Home1}
                                alt="Coleção Nova"
                                className="mt-4img-fluid rounded shadow"
                                />
                                </div>



                                <div class="col-4">
                                  <img 
                                src={Home1}
                                alt="Coleção Nova"
                                className="mt-4img-fluid rounded shadow"
                                />
                                </div>

          
                                <div class="col-6">
                                <img 
                                src={Home1}
                                alt="Coleção Nova"
                                className="mt-4img-fluid rounded shadow"
                                />
                                </div>
                              </div>
    </div>
    

    </>
      
 

    
  );
}


export default Assine;