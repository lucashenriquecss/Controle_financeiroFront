

import './App.css';
import { useState } from 'react';
import Routes from "./routes.js";
import Home from './pages/Home';
import Login from './components/Login/Login';
import Dashboard from './pages/Dashboard';

function App() {
  //logado ou não
  const token = sessionStorage.getItem('token')
  const[usuarioEstaLogado,setUsuarioLogado] = useState(token!=null)

  console.log(usuarioEstaLogado)
  return (
    <div className="App">
      <Dashboard/>
    </div>
  );
}

export default App;
