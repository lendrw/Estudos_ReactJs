import Item from "./Item"

function List(){
    return(
        <>
        <h1>Minha lista</h1>
        <ul>
            <Item marca="Ferrari" ano_lancamento={1965}></Item>
            <Item marca="Xinerai" ano_lancamento={1999}></Item>
            <Item marca="Renaut" ano_lancamento={2000}></Item>
            <Item/>
        </ul>
        </>
    )
}

export default List