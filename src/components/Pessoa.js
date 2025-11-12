function Pessoa({nome,profissao,idade,pessoa}){
    return(
        <div>
            <img src={pessoa} alt={nome}/>
            <p>Meu nome é:{nome}</p>
            <p>Minha idade é:{idade}</p>
            <p>Minha Profissão é:{profissao}</p>
        </div>
    )
}

export default Pessoa;