import Evento from './components/Evento';
import './App.css';
import style from './components/Frase.module.css';
import Form from './components/Form';
function App() {
  const nome = "Igoor"


  const url = "https://placehold.co/600x400"
  return (
    <div className="App"> 
      <h1 className={style.titulo}>Testando eventos!</h1>
      <Form/>
      <Evento/>
     </div> 
  );
}

export default App;
