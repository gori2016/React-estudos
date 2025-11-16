function Evento(){

    function meuEvento(){
        alert("O evento está funcionando!")
    }




    return(
        <div>
            <p>Clique para disparar um evento</p>
            <button onClick={meuEvento}>Clique aqui</button>
        </div>
    )
}

export default Evento;