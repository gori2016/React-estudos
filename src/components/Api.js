import { useState, useEffect } from "react"
function Api(){
     //Guarda os dados que vem da API
      const [usuarios, setUsuarios] = useState([])
    
    //Rode isso quando 
      useEffect(()=>{
        //faz o pedido para a API "me mande a lista de usuarios"
        fetch("http://localhost:3001/usuarios")
    
        // res(vem em um formato que o JS não usa direto) vira res.json que vira um objeto/array JS
        .then(res => res.json())
    
        //data são os dados prontos que estão no db.json 
        //salva os dados no state setUsuarios
        .then(data => setUsuarios(data))
      }, []) // roda uma vez só por conta do [] vazio
    
      return (
       <div>
        <h1>Usuarios</h1>
        {usuarios.map(user =>(
          <p key={user.id}>{user.nome}</p>
          //.map percorre o array item por item e retorna algo novo para cada item em react é usado para transformar dados em JSX
          //user é cada objeto do array um por vez
          //key é obrigatório em react quando usa o .map, serve para identificar cada item, saber o que mudou entrou ou saiu
        ))}
       </div>
      )
    }


export default Api