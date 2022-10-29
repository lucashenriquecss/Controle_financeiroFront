import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import './Login.css';
import Cadastro from '../Cadastro/Cadastro.js';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const entrarFormUser = (event) => {
        event.preventDefault()
        const usuario = {
            username, password
        }
        axios.post('http://localhost:8000/api/token/', usuario)
            .then(res => {
                console.log(res);
            })
            .catch(erro => {
                if (erro?.response?.data?.message) {
                    alert(erro.response.data.message)
                }
                else {
                    alert('aconteceu um erro inesperado ao efetuar o login, entre em contato com o suporte da api')
                }
            })
    }
    return (
        <div className="login">
            <h1>Bem-vindo ao Controle Financeiro</h1>
            <div className='box'>
                <div className='form-login'>
                <h2>Login</h2>
                    <Form onSubmit={entrarFormUser}>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Login:</Form.Label>
                            <Form.Control type="text" placeholder="Login" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha:</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Entrar
                        </Button>
                    </Form>
                </div>
                <div className='cadastro'>
                    <Cadastro />
                </div>
            </div>
        </div>
    );
}

export default Login;