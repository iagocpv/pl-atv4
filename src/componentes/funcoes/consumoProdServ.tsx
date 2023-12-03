type props = {
    tema: string
}

export default function ConsumoProdServ(props: props) {
        let tema = props.tema
        return (
            <div className="container-fluid">
                <h3 className="list-title">Top 5 produtos ou serviços mais consumidos: </h3>
                <ul className="list-group">
                    <li className="list-group-item">1- Produto/Serviço 1</li>
                    <li className="list-group-item">2- Produto/Serviço 2</li>
                    <li className="list-group-item">3- Produto/Serviço 3</li>
                    <li className="list-group-item">4- Produto/Serviço 4</li>
                    <li className="list-group-item">5- Produto/Serviço 5</li>
                </ul>
            </div>
        )
}