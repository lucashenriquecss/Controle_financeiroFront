
import { useState } from 'react';
import Login from "../components/Login/Login.js";
import { Link } from 'react-router-dom';

function Home() {
  //logado ou não
  const token = sessionStorage.getItem('token')
  const[usuarioEstaLogado,setUsuarioLogado] = useState(token!=null)

  console.log(usuarioEstaLogado)
  return (
    <div className="Home">
      <div>
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">dashboard</Link>
          </li>
        </ul>
      </nav>
    </div>
    </div>
  );
}

export default Home;