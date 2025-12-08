import './App.css';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Footer from './layout/Footer';
import { useEffect, useState } from 'react';
import EscolherCor from './components/EscolherCor';
import MostrarCor from './components/MostrarCor';

function App() {
  const [cor, setCor] = useState("")

  useEffect(() =>{
    document.body.style.backgroundColor = cor
  })
  return (
      <div>
        <EscolherCor setCor={setCor}/>
      </div>
    
  );
}

export default App;
