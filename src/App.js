import './App.css';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/empresa">Empresa</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
