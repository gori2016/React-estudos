function Form(){

function Enviar(){
    return(alert("Formulário enviado com sucesso!")
)
}


    return(
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={Enviar}>
                <label htmlFor="">Nome</label>
                <input type="text" />
                <input type="submit" value="enviar" />
            </form>
        </div>
    )

}

export default Form