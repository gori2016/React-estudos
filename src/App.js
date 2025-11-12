
import './App.css';
import HelloWorld from './components/HelloWorld.js';
import SayMyName from './components/SayMyName.js';
import Pessoa from './components/Pessoa.js';
import Frase from './components/Frase.js';
import style from './components/Frase.module.css';
import List from './components/List.js';
import Item from './components/Item.js';
function App() {
  const nome = "Igoor"

  function sum(a,b){
    return a + b;
  }

  const url = "https://placehold.co/600x400"
  return (
    <div className="App"> 
      <h1 className={style.titulo}>Testando CSS!</h1>
      <List></List>
    <Frase></Frase>
    <Frase></Frase>
      <SayMyName nome ="sep"></SayMyName>
      <Pessoa nome ="igor" profissao ="Programador" idade="19" pessoa="https://picsum.photos/200"></Pessoa>
    </div>
  );
}

export default App;
