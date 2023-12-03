type props = {
    tema: string
}

export default function ConsumoCliente(props: props){
        let tema = props.tema
        return (
            <div className="container-fluid">
                <h3 className="list-title">Top 10 clientes que mais consumiram: </h3>
                <ul className="list-group">
                    <li className="list-group-item">1- Cliente 1</li>
                    <li className="list-group-item">2- Cliente 2</li>
                    <li className="list-group-item">3- Cliente 3</li>
                    <li className="list-group-item">4- Cliente 4</li>
                    <li className="list-group-item">5- Cliente 5</li>
                    <li className="list-group-item">6- Cliente 6</li>
                    <li className="list-group-item">7- Cliente 7</li>
                    <li className="list-group-item">8- Cliente 8</li>
                    <li className="list-group-item">9- Cliente 9</li>
                    <li className="list-group-item">10- Cliente 10</li>
                </ul>
            </div>
        )
}