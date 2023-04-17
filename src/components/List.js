import Item from "./Item";

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Fiat" anoLancamento={1999}/>
                <Item marca="Ferrari" anoLancamento={2002}/>
                <Item marca="Renault" anoLancamento={2008}/>
                <Item/>
            </ul>
        </>
    )
}

export default List;