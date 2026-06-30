import { Link } from "react-router-dom";
import Foto1 from "../img/Foto1.png";
import Foto00 from "../img/Foto00.png";
import Home1 from "../img/Home1.png";
import Barradeservicos from "../img/Barradeservicos.png";
import BarraPatrocinio from "../img/BarraPatrocinio.png";
import Navbar from "../Components/Navbar";

import Assi2 from "../img/Assi2.png";
import Assi3 from "../img/Assi3.png";


function Assine() {
  return (
 <>
     <div>
      <div className="container" style={{ backgroundColor: "rgb(161, 52, 156)" }}>
        <div className="container mb-3 p-3 gap-3">
          <div className="row">
            <div className="d-flex col-6 col-md-9 gap-4">
              <h5 className="text-light mb-3">Inscreva-se no Clube Ciranda no mês de Julho e Ganhe 20% OFF para fazer parte do clube</h5>
        
        
        
        </div>
        </div>
        </div>
      </div>
     </div>
     <div className="container justify-content-center" >
        <img src={Assi2} alt="Destaque" className="img-fluid w-500" />

      </div>
      <div className="container" style={{ backgroundColor: "rgb(161, 52, 156)" }}>
        <div className="container mb-3 p-3 gap-3">
          <div className="row">
            <div className="d-flex col-6 col-md-9 gap-4">
              <h5 className="text-light mb-3">ASSINE JÁ</h5>
            </div>
             </div>
              </div>
               </div>

     <div className="container justify-content-center" >
        <img src={Assi3} alt="Destaque" className="img-fluid w-500" />
      </div>

    
      
      
       </>
      
 

    
  );
}


export default Assine;