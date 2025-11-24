import Evento from './components/Evento';
import './App.css';
import style from './components/Frase.module.css';
import Form from './components/Form';
import Condicional from './components/Condicional';
function App() {
  const nome = "Igoor"


  const url = "https://placehold.co/600x400"
  return (
    <div className="App"> 
      <h1>Testando renderização por condições</h1>
      <Condicional />
     </div> 
  );
}

export default App;
