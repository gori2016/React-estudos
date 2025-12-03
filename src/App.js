import './App.css';
import OutraLista from './components/outraLista';
import Saudacao from './components/Saudacao';
import SeuNome from './components/SeuNome';
import { useState } from 'react';
import MudarNome from './components/MudarNome';
import Contador from './components/Contador';

function App() {
const [nome, setNome] = useState();  



  return (
    <div className="App"> 
     <h1>Contador</h1>
      <Contador />
     </div> 
  );
}

export default App;
