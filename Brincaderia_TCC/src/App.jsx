import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";

import Produtos from "./Pages/Produtos";

import Cadastro from "./Pages/Cadastro"

import Carrinho from "./Pages/Carrinho";

import Tecido from "./Pages/Tecido";



function App() {
  return (


    <BrowserRouter>




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

      <Route path="/Carrinho" element={<Carrinho/>}/>


      </Routes>


    </BrowserRouter>


  );
}


export default App;





