import { SetStateAction, useState } from "react";

type props = {
    tema: string
}

function FormularioCadastroCliente(props: props) {
    let tema = props.tema
    const [nome, setNome] = useState('')
    const [nomeSocial, setNomeSocial] = useState('')
    const [email, setEmail] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [cep, setCep] = useState('')
    const [infos, setInfos] = useState('')
    const [ddd, setDdd] = useState('')
    const [telefone, setTelefone] = useState('')



    const cadastrar = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        fetch('http://localhost:32831/cliente/cadastrar', {
            method: 'POST',
            body: JSON.stringify({
                nome: nome,
                nomeSocial: nomeSocial,
                email: email,
                endereco: {
                    rua: rua,
                    numero: numero,
                    bairro: bairro,
                    cidade: cidade,
                    estado: estado,
                    codigoPostal: cep,
                    informacoesAdicionais: infos
                },
                telefones: [
                    {
                        numero: telefone,
                        ddd: ddd
                    }
                ]
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then((data) => {
            setNome('')
            setNomeSocial('')
            setEmail('')
            setRua('')
            setNumero('')
            setBairro('')
            setCidade('')
            setEstado('')
            setCep('')
            setDdd('')
            setTelefone('')
            setInfos('')
            console.log('Cliente Cadastrado',data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="container-fluid">
            <h3 className="cadastro-title">Cadastrar cliente</h3>
            <form onSubmit={cadastrar}>
                <div className="input-group mb-3">
                    <input type="text" 
                    value={nome} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setNome(e.target.value)}
                    className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text"
                    value={nomeSocial} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setNomeSocial(e.target.value)}
                    className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                    <input type="text"
                    value={email} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value)}
                    className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-4">
                    <input type="text"
                    value={ddd} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setDdd(e.target.value)}
                    className="form-control" placeholder="DDD" aria-label="DDD" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text"
                    value={telefone} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setTelefone(e.target.value)}
                    className="form-control" placeholder="Telefone" aria-label="Telefone" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text"
                    value={rua} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setRua(e.target.value)}
                    className="form-control" placeholder="Rua" aria-label="Rua" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text"
                    value={numero} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setNumero(e.target.value)}
                    className="form-control" placeholder="Número" aria-label="Número" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text"
                    value={bairro} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setBairro(e.target.value)}
                    className="form-control" placeholder="Bairro" aria-label="Bairro" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text"
                    value={cidade} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setCidade(e.target.value)}
                    className="form-control" placeholder="Cidade" aria-label="Cidade" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text"
                    value={estado} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setEstado(e.target.value)}
                    className="form-control" placeholder="Estado" aria-label="Estado" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text"
                    value={cep} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setCep(e.target.value)}
                    className="form-control" placeholder="CEP" aria-label="CEP" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text"
                    value={infos} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setInfos(e.target.value)}
                    className="form-control" placeholder="Informações Adicionais" aria-label="Informações Adicionais" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="submit" style={{ background: tema }}>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}
export default FormularioCadastroCliente