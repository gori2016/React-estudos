import { useState } from "react";
function Contador(){
const [numero, setNumero] = useState(0);

    return(
        <div>
            <h2>{numero}</h2>
            <button onClick={() => {setNumero(numero + 1)} }>Aumentar</button>
            <button onClick={() => {setNumero(numero - 1)}}>Diminuir</button>
            <button onClick={() => {setNumero(0)}}>Resetar</button>
        </div>
    )
}

export default Contador;    