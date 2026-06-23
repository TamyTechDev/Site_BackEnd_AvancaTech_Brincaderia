import { Link } from "react-router-dom";
import { useState } from "react";
import Foto1 from "../img/Foto1.png";
import Foto00 from "../img/Foto00.png";
import Home1 from "../img/Home1.png";
import"../estilizacao/estilo.css";


function Navbar() {

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
                 <img src={Foto00} a href="./Home" alt="" className="w-50"/>
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
     
                     <div className="col-2">
                     </div>
     
                     <div className="col-2">
                       <Link to="/Tecido"className="text-decoration-none text-secondary">Tecido</Link>
                      
                     </div>
     
                     <div className="col-2">
                        <Link to="/Madeira"className="text-decoration-none text-secondary">Madeira</Link>
                     </div>
                     <div className="col-2 ">
                      <Link to="/Fantasias"className="text-decoration-none text-secondary">Fantasias</Link>
                     </div>
                     <div className="col-2">
                      <Link to="/Joguinho"className="text-decoration-none text-secondary">Joguinho</Link> 
                     </div>
                     <div className="col-2">
                      <Link to="/Assine"className="text-decoration-none text-secondary">Assine</Link> 
                     </div>
                 </div>
             </div>
           </div>
     
   
    </>
  );
}


export default Navbar;