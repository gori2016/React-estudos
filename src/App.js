import './App.css';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Footer from './layout/Footer';
import { useEffect, useState } from 'react';
import EscolherCor from './components/EscolherCor';
import MostrarCor from './components/MostrarCor';
import Api from './components/Api'

function App() {
 return(
  <div>
    <h1>Buscando dados na Api</h1>
    <Api/>
  </div>
 )
  
}

export default App;
