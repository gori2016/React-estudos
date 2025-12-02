function OutraLista({ itens }) {
    return (
        <div>
            <h3>Lista de coisas boas:</h3>
            {itens.map((item) => (
                <p>{item}</p>
            ))}
        </div>
    );
}

export default OutraLista;
