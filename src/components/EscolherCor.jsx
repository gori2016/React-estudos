function EscolherCor({setCor}){
    return(
        <div className="sep1">
            <h1>Escolha a cor do site</h1>
            <input type="color" placeholder="Escolha sua cor"  onChange={(e) => setCor(e.target.value)} />
        </div>
    )
}

export default EscolherCor