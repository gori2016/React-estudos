import Button from "./eventos/Button";


function Evento() {

    function meuEvento() {
        alert("O evento está funcionando!")
    }

    function segundoEvento() {
        alert("Segundo evento!")
    }

    return (
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro Evento"></Button>
            <Button event={segundoEvento} text="Segundo evento acontecendo"></Button>

        </div>
    )
}

export default Evento;