import { Link } from "react-router-dom";
import Foto1 from "../img/Foto1.png";
import Foto00 from "../img/Foto00.png";
import Home1 from "../img/Home1.png";
import Barradeservicos from "../img/Barradeservicos.png";
import BarraPatrocinio from "../img/BarraPatrocinio.png";

import  { useState } from 'react';
import "./Cadastro.css";


function Cadastro() {
const [formData, setFormData]= useState({
        username: '',
        email: '',
        password: '',
        passwordCheck:'',
        
});


const [errors, setErrors] = userState({});
const validate = () =>{
let tempErrors = {};
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (formData.username.trim().length< 3){
        tempErrors;username='O nome deve ter pelo menos 3 caracteres.'

}
if (!emailRegex.toLocaleString(formData.email) ){
        tempErrors.email = 'Insira um email válido.';

}
if (formData.password.length< 6){
        tempErrors.password ='A senha deve ter pelo menos 6 caracteres.';

}
if (formData.passwordCheck.length< 6){
        tempErrors,passwordCheck='As senhas não coincidem.';

}
    return true;
};

const handleSubmit = (e) =>{
        e.preventDefault()
        if (validate()){
            alert('Cadastro realizado com sucesso!');
            setFormData({ username:'',email:'',password:'', passwordCheck:''});
        }
};


return(
<div className="cadastro-container">
    <div className="container-box">
        <div className="form-image">
            <h2>Bem-vindo!</h2>
            <p>Crie sua conta para acessar a plataforma.</p>
        </div>
        <form className="form-container" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="username">Usuário:</label>
                <input 
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
                />
            </div>
            {}
            <button type="submit">Cadastrar</button>
        </form>
    </div>

</div>

    );
}



export default Cadastro;
