import "./style.css"

type props = {
    seletorView: Function
}

function Cadastro(props: props) {
    return(
        <>
            <h3 className="cadastro-title">O que deseja cadastrar?</h3>
            <div className="opcoes-cadastro">
                <button onClick={(e) => props.seletorView('CadastroCliente', e)}>Clientes</button>
                <button onClick={(e) => props.seletorView('CadastroPet', e)}>Pets</button>
                <button onClick={(e) => props.seletorView('CadastroProduto', e)}>Produtos</button>
                <button onClick={(e) => props.seletorView('CadastroServiço', e)}>Serviços</button>
            </div>
        </>
    )
}

export default Cadastro