import Servico from "./servico"


type props = {
    tema: string
}

function ListaServicos(props: props) {
    const servicos = [
        {id: 1, nome: 'Serviço 1', valor: 10.00, quantidade: 5},
        {id: 2, nome: 'Serviço 2', valor: 15.00, quantidade: 10}
    ]
    let tema = props.tema
    return (
        <div className="container-fluid">
            <h3 className="list-title">Serviços</h3>
            <div className="list-group">
                {servicos.map(s => {
                    return (
                        <Servico key={s.id}
                        id={s.id}
                        nome={s.nome}
                        valor={s.valor}
                        quantidade={s.quantidade}
                        />
                    )
                })}
            </div>
        </div>
    )

}

export default ListaServicos