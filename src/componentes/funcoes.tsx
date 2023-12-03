import "./style.css"

type props = {
    seletorView: Function
}

export default function Funcoes(props: props){
        return(
            <>
                <h3 className="cadastro-title">Escolha uma das opções:</h3>
                <div className="opcoes-cadastro">
                    <button onClick={(e) => props.seletorView('ConsumoCliente', e)}>Consumo por cliente</button>
                    <div className="opcoes-funcoes">
                        <div className="opcoes-cadastro">
                            <h4>Top 5 produtos ou serviços mais consumidos:</h4>
                            <button onClick={(e) => props.seletorView('ConsumoProdServ', e)}>Geral</button>
                            <button onClick={(e) => props.seletorView('ConsumoTipoRaca', e)}>Por tipo e raça dos pets</button>
                        </div>

                        <div className="opcoes-cadastro">
                            <h4>Top 10 clientes que mais consumiram</h4>
                            <button onClick={(e) => props.seletorView('ConsumoQntd', e)}>Por quantidade</button>
                            <button onClick={(e) => props.seletorView('ConsumoValor', e)}>Por valor</button>
                        </div>
                    </div>

                </div>
            </>
        )
}