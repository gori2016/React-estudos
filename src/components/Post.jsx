import { useState, useEffect } from "react"

function Post() {

    /// estados, (memória do componente)///
    /// crie uma variavel(nome) que começa vazia e uma função (setNome) para mudar esse valor///
    const [nome, setNome] = useState("")


    ///crie uma lista de vazia de usuarios
    const [usuarios, setUsuarios] = useState([])


    // busca os dados quando o componente abre 
    useEffect(() => {
        //faça um pedido para a api e me traga os usuarios 
        fetch("http://localhost:5000/usuarios")
            //transforma a resposta em Java Script
            .then(res => res.json())

            //Guarde esses dados no state usuarios
            .then(data => setUsuarios(data))
        //array vazio é para rodar uma unica vez
    }, [])


    // função para salvar usuário só vai rodar quando vc apertar o botão
    function salvarUsuario() {
        //API, salve um novo usuario com esse nome
        fetch("http://localhost:5000/usuarios", {
            //Post = enviar dados
            method: "POST",
            //headers diz que e JSON
            headers: {
                "Content-Type": "application/json"
            },
            //BODY = o dado vai para db.json
            body: JSON.stringify({
                nome: nome
            })
        })
            // RESPOSTA DA API
            // transforma a resposta da Api em javaScript
            .then(res => res.json())
            //data é o resultado do res.json() já em formato javaScript
            .then(data => {

                // adiciona o novo usuário ao array de usuários existente
                setUsuarios([...usuarios, data])

                //limpa o input após salvar
                setNome("")
            })

            if(nome === ""){
                alert("Não deixe o input vazio.")
            }else{
                 alert("Você salvou um usuário!")
            }

           

    }


    return (
        <div>
            <input onChange={e => setNome(e.target.value)} type="text" placeholder="Digite seu nome" value={nome} />
            <button onClick={salvarUsuario}>Salvar Usuario</button>
        </div>
    )
}

export default Post
