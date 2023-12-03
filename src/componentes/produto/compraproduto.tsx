type props = {
    tema: string
}

export default function CompraProduto(props: props) {
    let produtos = [
        {id: 1, nome: 'Serviço 1', valor: 10.00, quantidade: 5},
        {id: 2, nome: 'Serviço 2', valor: 15.00, quantidade: 10}
    ]

        return (
            <>
                <div className="container-fluid">
                    <h3 className="list-title">O que deseja comprar?</h3>
                    <div className="list-group">
                        <div className="">
                            {produtos.map(p => {
                                return (
                                    <div className="list-group-item list-group-item-action item-listado" key={p.id}>
                                        <div className='conteudo'>
                                            <p>{p.id}</p>
                                            <p>{p.nome}</p>
                                            <p>R${p.valor}</p>
                                        </div>
                                        <div className="acao">
                                            <button className="btn btn-primary">Comprar</button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </>
        )
}