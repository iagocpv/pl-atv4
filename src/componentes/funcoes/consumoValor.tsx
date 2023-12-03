type props = {
    tema: string
}

export default function ConsumoValor(props: props){
        let tema = props.tema
        return (
            <div className="container-fluid">
                <h3 className="list-title">Top 10 clientes que mais conusmiram por valor: </h3>
                <ul className="list-group">
                    <li className="list-group-item">1- Cliente 1: R$00.00</li>
                    <li className="list-group-item">2- Cliente 2: R$00.00</li>
                    <li className="list-group-item">3- Cliente 3: R$00.00</li>
                    <li className="list-group-item">4- Cliente 4: R$00.00</li>
                    <li className="list-group-item">5- Cliente 5: R$00.00</li>
                </ul>
            </div>
        )
}