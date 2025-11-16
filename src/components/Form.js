import {use, useState} from 'react'

function Form() {

    function Enviar(e) {
     (alert("Formulário enviado com sucesso!"))
    console.log(`O nome é: ${nome}`)
    e.preventDefault()
    }

    const [nome, setName ] = useState()

    return (
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={Enviar}>
                <label htmlFor="">Nome</label>
                <input type="text" id='name' name='name' onChange={(e) => setName(e.target.value)} />
                
                <div>
                <label htmlFor="">Senha</label>
                <input type="password" name="" id="" />
                </div>


                <input type="submit" value="enviar" />
            </form>
        </div>
    )

}

export default Form