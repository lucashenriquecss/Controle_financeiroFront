

import './App.css';
import { useState } from 'react';
import Routes from "./routes.js";
import Home from './pages/Home';
import Login from './components/Login/Login';

function App() {
  //logado ou não
  const token = sessionStorage.getItem('token')
  const[usuarioEstaLogado,setUsuarioLogado] = useState(token!=null)

  console.log(usuarioEstaLogado)
  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;
