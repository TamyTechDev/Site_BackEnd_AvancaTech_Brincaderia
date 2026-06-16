import { useEffect, useState } from "react";
import axios from "axios";


function Produtos() {


  const [produtos, setProdutos] = useState([]);


  const [id, setId] = useState(null);


  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");
  const [estoque, setEstoque] = useState("");


  useEffect(() => {
    carregarProdutos();
  }, []);


  function carregarProdutos() {


    axios
      .get("http://localhost:3001/produtos")
      .then((resposta) => {
        setProdutos(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      });


  }


  function limparCampos() {


    setId(null);


    setNome("");
    setCategoria("");
    setPreco("");
    setEstoque("");


  }


  function cadastrar() {


    axios
      .post(
        "http://localhost:3001/produtos",
        {
          nome,
          categoria,
          preco,
          estoque
        }
      )
      .then(() => {


        carregarProdutos();


        limparCampos();


      });


  }


  function editar(produto) {


    setId(produto.id);


    setNome(produto.nome);


    setCategoria(produto.categoria);


    setPreco(produto.preco);


    setEstoque(produto.estoque);


  }


  function atualizar() {


    axios
      .put(
        `http://localhost:3001/produtos/${id}`,
        {
          nome,
          categoria,
          preco,
          estoque
        }
      )
      .then(() => {


        carregarProdutos();


        limparCampos();


      });


  }


  function excluir(id) {


    if (!window.confirm("Deseja excluir?")) {
      return;
    }


    axios
      .delete(
        `http://localhost:3001/produtos/${id}`
      )
      .then(() => {


        carregarProdutos();


      });


  }


  return (


    <div className="container mt-4">


      <div className="card shadow p-4">


        <h2 className="mb-4">
          Cadastro de Roupas
        </h2>


        <div className="row">


          <div className="col-md-6">


            <label>
              Nome
            </label>


            <input
              type="text"
              className="form-control mb-3"
              value={nome}
              onChange={(e) =>
                setNome(e.target.value)
              }
            />


          </div>


          <div className="col-md-6">


            <label>
              Categoria
            </label>


            <input
              type="text"
              className="form-control mb-3"
              value={categoria}
              onChange={(e) =>
                setCategoria(e.target.value)
              }
            />


          </div>


        </div>


        <div className="row">


          <div className="col-md-6">


            <label>
              Preço
            </label>


            <input
              type="number"
              className="form-control mb-3"
              value={preco}
              onChange={(e) =>
                setPreco(e.target.value)
              }
            />


          </div>


          <div className="col-md-6">


            <label>
              Estoque
            </label>


            <input
              type="number"
              className="form-control mb-3"
              value={estoque}
              onChange={(e) =>
                setEstoque(e.target.value)
              }
            />


          </div>


        </div>


        {id ? (


          <button
            className="btn btn-warning"
            onClick={atualizar}
          >
            Atualizar Produto
          </button>


        ) : (


          <button
            className="btn btn-primary"
            onClick={cadastrar}
          >
            Cadastrar Produto
          </button>


        )}


      </div>


      <div className="card shadow mt-4 p-4">


        <h3>
          Produtos Cadastrados
        </h3>


        <table className="table table-striped mt-3">


          <thead className="table-dark">


            <tr>


              <th>ID</th>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Preço</th>
              <th>Estoque</th>
              <th>Ações</th>


            </tr>


          </thead>


          <tbody>


            {produtos.map((produto) => (


              <tr key={produto.id}>


                <td>{produto.id}</td>


                <td>{produto.nome}</td>


                <td>{produto.categoria}</td>


                <td>
                  R$ {produto.preco}
                </td>


                <td>
                  {produto.estoque}
                </td>


                <td>


                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() =>
                      editar(produto)
                    }
                  >
                    Editar
                  </button>


                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() =>
                      excluir(produto.id)
                    }
                  >
                    Excluir
                  </button>


                </td>


              </tr>


            ))}


          </tbody>


        </table>


      </div>


    </div>


  );
}


export default Produtos;
