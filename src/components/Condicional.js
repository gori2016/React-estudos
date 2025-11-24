import { useState } from "react";

function Condicional() {
    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(e){
        e.preventDefault();
        setUserEmail(email)
    }

     function limparEmail(){
        setUserEmail("")
    }
    return (
        <><h2>Cadastre seu Email</h2><form action="">
            <input type="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)}/>
            <button onClick={enviarEmail}>Enviar Email</button>
            {userEmail && (
                <div>
                    <p>o email é {userEmail}</p>
                    <button onClick={limparEmail}>Limpar Email</button>
                </div>
            )}

        </form></>
        

    )
}

export default Condicional;