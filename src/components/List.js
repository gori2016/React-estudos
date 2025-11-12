import Item from './Item.js';
function List(){
    return(
        <>
            <h1>minha Lista</h1>
            <ul>
                <Item times ="Palmeiras"></Item>
                <Item times ="Corinthians"></Item>
                <Item times ="Santos"></Item>
                <Item times ="São Paulo"></Item>
            </ul>
        </>
    )
}

export default List;