import { Link } from "react-router-dom";
import Foto1 from "../img/Foto1.png";
import Foto00 from "../img/Foto00.png";
import Home1 from "../img/Home1.png";
import Barradeservicos from "../img/Barradeservicos.png";
import BarraPatrocinio from "../img/BarraPatrocinio.png";
import React, { useState } from 'react';
import './Cadastro.css';




export default function Cadastro() {
    // Estado para guardar os valores dos campos
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        passwordCheck: ''
    });

    // Estado para gerenciar as mensagens de erro de cada campo
    const [errors, setErrors] = useState({});

    // Função para atualizar os estados conforme o usuário digita
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Função de validação
    const validate = () => {
        let tempErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (formData.username.trim().length < 3) {
            tempErrors.username = 'O nome deve ter pelo menos 3 caracteres.';
        }
        if (!emailRegex.test(formData.email)) {
            tempErrors.email = 'Insira um e-mail válido.';
        }
        if (formData.password.length < 6) {
            tempErrors.password = 'A senha deve ter pelo menos 6 caracteres.';
        }
        if (formData.passwordCheck !== formData.password) {
            tempErrors.passwordCheck = 'As senhas não coincidem.';
        }

        setErrors(tempErrors);
        // Se o objeto de erros estiver vazio, o formulário é válido
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validate()) {
            alert('Cadastro realizado com sucesso! Aqui você faria o POST para a sua API.');
            // Limpa o formulário
            setFormData({ username: '', email: '', password: '', passwordCheck: '' });
        }
    };

    return (
        <div className="cadastro-container">
            <div className="container-box">
                <div className="form-image">
                    <h2>Bem-vindo!</h2>
                    <p>Crie sua conta para acessar a plataforma.</p>
                </div>
                
                <div className="form-container">
                    <form onSubmit={handleSubmit} noValidate>
                        <h2>Criar Conta</h2>
                        
                        {/* Campo Nome */}
                        <div className={`input-group ${errors.username ? 'error' : ''}`}>
                            <label htmlFor="username">Nome Completo</label>
                            <input 
                                type="text" 
                                id="username" 
                                name="username"
                                placeholder="Digite seu nome"
                                value={formData.username}
                                onChange={handleChange}
                            />
                            {errors.username && <span className="error-message">{errors.username}</span>}
                        </div>

                        {/* Campo Email */}
                        <div className={`input-group ${errors.email ? 'error' : ''}`}>
                            <label htmlFor="email">E-mail</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email"
                                placeholder="seuemail@exemplo.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>

                        {/* Campo Senha */}
                        <div className={`input-group ${errors.password ? 'error' : ''}`}>
                            <label htmlFor="password">Senha</label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password"
                                placeholder="No mínimo 6 caracteres"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.password && <span className="error-message">{errors.password}</span>}
                        </div>

                        {/* Campo Confirmar Senha */}
                        <div className={`input-group ${errors.passwordCheck ? 'error' : ''}`}>
                            <label htmlFor="password-check">Confirmar Senha</label>
                            <input 
                                type="password" 
                                id="password-check" 
                                name="passwordCheck"
                                placeholder="Digite a senha novamente"
                                value={formData.passwordCheck}
                                onChange={handleChange}
                            />
                            {errors.passwordCheck && <span className="error-message">{errors.passwordCheck}</span>}
                        </div>

                        <button type="submit" className="btn-submit">Cadastrar</button>
                        
                        <p className="login-link">Já tem uma conta? <a href="/login">Faça login</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
}