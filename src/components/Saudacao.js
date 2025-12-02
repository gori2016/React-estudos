function Saudacao({nome}){

      function gerarSaudacao(algumNome){
        return `Olá ${algumNome}, tudo bem?`;
    }

   
    return(
        <>
        {gerarSaudacao(nome)}
        </>
    )
}

export default Saudacao;