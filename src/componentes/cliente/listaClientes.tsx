/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import Cliente from "./cliente";

type props = {
    tema: string
}

type Cliente = {
    id: number;
    nome: string;
    nomeSocial: string;
    email: string;
    endereco: {
      rua: string;
      numero: string;
      bairro: string;
      cidade: string;
      estado: string;
      codigoPostal: string;
      informacoesAdicionais: string;
    };
    telefones: {
        id: number;
        numero: string;
        ddd: string;
        links: never[];
    }[]
  };

function ListaCliente(props: props) {
    const [cliente, setCliente] = useState([])
    const clientes: Cliente[] = cliente
    let tema = props.tema

    useEffect(() => {
        fetch('http://localhost:32831/cliente/clientes', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            res.json().then(data => {
                setCliente(data)
                console.log(data)
            })
        })
    }, [])

    return (
        <div className="container-fluid">
            <h3 className="list-title">Clientes</h3>
            <div className="list-group">
                {clientes.map(c => {
                    return (
                        <Cliente
                            id={c.id}
                            nome={c.nome}
                            nomeSocial={c.nomeSocial}
                            email={c.email}
                            rua = {c.endereco.rua}
                            numero={c.endereco.numero}
                            bairro={c.endereco.bairro}
                            cidade={c.endereco.cidade}
                            estado={c.endereco.estado}
                            cep={c.endereco.codigoPostal}
                            info={c.endereco.informacoesAdicionais}
                            telefones = {c.telefones}
                        ></Cliente>
                    )
                
                })}
            </div>
        </div>
    )
}

export default ListaCliente