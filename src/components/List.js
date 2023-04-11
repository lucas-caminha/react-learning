import Item from "./Item";

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Fiat"/>
                <Item marca="Ferrari"/>
                <Item marca="Renault"/>
            </ul>
        </>
    )
}

export default List;