import Produto from "./produto"

type props = {
    tema: string
}

function ListaProdutos(props: props) {
    let produtos = [
        {id: 1, nome: 'Produto 1', valor: 10.00, quantidade: 5},
        {id: 2, nome: 'Produto 2', valor: 15.00, quantidade: 10}
    ]
    let tema = props.tema
    
    return (
        <div className="container-fluid">
            <h3 className="list-title">Produtos</h3>
            <div className="list-group">
                {produtos.map(p => {
                    return (
                        <Produto key={p.id}
                        id={p.id}
                        nome={p.nome}
                        valor={p.valor}
                        quantidade={p.quantidade}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ListaProdutos