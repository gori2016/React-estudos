import Item from './Item.js';
function List(){
    return(
        <>
            <h1>minha Lista</h1>
            <ul>
                <Item marca ="fiat" lancamento="2010"></Item>
                <Item marca ="palio" lancamento="2000"></Item>
                <Item marca ="chevrolet" lancamento="1999"></Item>
                <Item marca ="byd" lancamento={1023}></Item>
            </ul>
        </>
    )
}

export default List;