import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Produtos from "./Pages/Produtos";
import Cadastro from "./Pages/Cadastro"
import Carrinho from "./Pages/Carrinho";
import Tecido from "./Pages/Tecido";
import Madeira from "./Pages/Madeira";
import Fantasias from "./Pages/Fantasias";
import Assine from "./Pages/Assine";
import Joguinho from "./Pages/Joguinho";



function App() {
  return (


    <BrowserRouter>
      <Navbar />

      <Routes>


        <Route
          path="/"
          element={<Home />}
        />


        <Route
          path="/produtos"
          element={<Produtos />}
        />

         <Route
          path="/Cadastro"
          element={<Cadastro/>}
        />
         <Route
          path="/Tecido"
          element={<Tecido/>}
        />

        <Route 
        path="/Carrinho" 
        element={<Carrinho/>}
        />

        <Route 
        path="/madeira"
        element={<Madeira/>}
        />
        <Route 
        path="/Fantasias" 
        element={<Fantasias/>}
        />
        <Route 
        path="/Assine" 
        element={<Assine/>}/>

        <Route 
        path="/Joguinho" 
        element={<Joguinho/>}/>
        


      </Routes>


    </BrowserRouter>


  );
}


export default App;





