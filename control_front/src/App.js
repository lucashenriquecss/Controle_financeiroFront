

import './App.css';
import Login from './components/Login/Login.js';
import { useState } from 'react';


function App() {
  //logado ou não
  const token = sessionStorage.getItem('token')
  const[usuarioEstaLogado,setUsuarioLogado] = useState(token!=null)

  console.log(usuarioEstaLogado)
  return (
    <div className="App">
    <Login/>
    </div>
  );
}

export default App;
