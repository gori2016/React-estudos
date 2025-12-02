import './App.css';
import OutraLista from './components/outraLista';
import Saudacao from './components/Saudacao';
import SeuNome from './components/SeuNome';
import { useState } from 'react';

function App() {
const [nome, setNome] = useState();  



  return (
    <div className="App"> 
      <h1>stateLift</h1>
      <SeuNome setNome={setNome} />
      <p>O nome que aparece no input é: <p>{nome}</p></p>
      <Saudacao nome={nome}/>

      
     </div> 
  );
}

export default App;
