import { useState, useEffect } from "react"

function Post() {
  const [nome, setNome] = useState("")
  const [usuarios, setUsuarios] = useState([])

  // BUSCAR USUÁRIOS
  useEffect(() => {
    fetch("http://localhost:5000/usuarios")
      .then(res => res.json())
      .then(data => setUsuarios(data))
  }, [])

  // SALVAR USUÁRIO
  function salvarUsuario() {
    if (nome.trim() === "") {
      alert("Não deixe o input vazio.")
      return
    }

    fetch("http://localhost:5000/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ nome })
    })
      .then(res => res.json())
      .then(data => {
        setUsuarios([...usuarios, data])
        setNome("")
        alert("Você salvou um usuário!")
      })
  }

  // 👉 FUNÇÃO DE DELETE 

  // recebe o id do usuario que vc quer deletar
  function deletarUsuario(id) {
    fetch(`http://localhost:5000/usuarios/${id}`, {
      method: "DELETE"
      //chama a rota de delete na API
    })

        //remove o usuario do estado
        //não precisa buscar tudo denovo
      .then(res => {
        if (!res.ok) throw new Error("Erro ao deletar")
        setUsuarios(usuarios.filter(user => user.id !== id))
      })
      .catch(() => alert("Erro ao deletar usuário"))
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={e => setNome(e.target.value)}
      />

      <button onClick={salvarUsuario}>Salvar Usuário</button>

      <ul>
        {usuarios.map(user => (
          <li key={user.id}>
            {user.nome}
            <button onClick={() => deletarUsuario(user.id)}>
              Deletar
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Post
