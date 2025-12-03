import { useState } from "react";

function MudarNome(){
    const [nome, setNome] = useState("");
    return(
        <div>
            <input onChange={(e) => setNome(e.target.value)} type="text" placeholder="Digite seu nome" />
            <p>seu nome é: {nome}</p>
        </div>
    )
}

export default MudarNome;