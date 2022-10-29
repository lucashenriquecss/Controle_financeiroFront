import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import './Cadastro.css';
import axios from 'axios';


function Cadastro() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const envioFormUser = (event)=>{
        event.preventDefault()
        const usuario = {
            email,username,password
        }
        axios.post('http://localhost:8000/users/',usuario)
            .then(()=>{
                alert('usuario foi cadastrado com sucesso!')
                setEmail('')
                setUsername('')
                setPassword('')
                
                
            })
            .catch(()=>{
                alert('Cadastro falhou')
            })
    }   
    return (
        <div className="cadastrar">
            <h3>Cadastre-se para usar a plataforma</h3>
            <Form onSubmit={envioFormUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Login:</Form.Label>
                    <Form.Control type="text" placeholder="Login" value={username} onChange={(e)=> setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha:</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </Form.Group>      
                <Button variant="primary" type="submit">
                    Cadastrar
                </Button>
            </Form>
        </div>
    );
}

export default Cadastro;