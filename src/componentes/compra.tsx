import "./style.css"

type props = {
    seletorView: Function
}

export default function Compra(props: props){
        return(
            <>
                <h3 className="cadastro-title">O que deseja comprar?</h3>
                <div className="opcoes-cadastro">
                    <button onClick={(e) => props.seletorView('CompraProduto', e)}>Produtos</button>
                    <button onClick={(e) => props.seletorView('CompraServico', e)}>Serviços</button>
                </div>
            </>
        )
}