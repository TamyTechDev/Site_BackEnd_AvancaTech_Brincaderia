import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./Components/Navbar";


import Home from "./Pages/Home";

import Produtos from "./Pages/Produtos";
import Cadastro from "./Pages/Cadastro";


function App() {
  return (


    <BrowserRouter>




      <Routes>


        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/cadastro"
          element={<Cadastro/>}
        />


        <Route
          path="/produtos"
          element={<Produtos />}
        />


      </Routes>


    </BrowserRouter>


  );
}


export default App;





