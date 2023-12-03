type props = {
    tema: string
}

export default function ConsumoQntd(props: props){
        let tema = props.tema
        return (
            <div className="container-fluid">
                <h3 className="list-title">Top 10 clientes que mais consumiram por quantidade: </h3>
                <ul className="list-group">
                    <li className="list-group-item">1- Cliente 1: 0000</li>
                    <li className="list-group-item">2- Cliente 2: 0000</li>
                    <li className="list-group-item">3- Cliente 3: 0000</li>
                    <li className="list-group-item">4- Cliente 4: 0000</li>
                    <li className="list-group-item">5- Cliente 5: 0000</li>
                </ul>
            </div>
        )
}