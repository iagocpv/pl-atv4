type props = {
    tema: string
}

function FormularioCadastroServico(props: props) {
    let tema = props.tema
    return (
        <div className="container-fluid">
            <h3 className="cadastro-title">Cadastrar serviço</h3>
            <form>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Valor" aria-label="Valor" aria-describedby="basic-addon1" />
                </div>
    
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}

export default FormularioCadastroServico