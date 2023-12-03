/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from '../PetLovers-icon.png';

type props = {
    tema: string,
    botoes: string[],
    seletorView: Function
}

function BarraNavegacao(props: props) {
    function gerarListaBotoes() {
        if (props.botoes.length <= 0) {
            return <></>
        } else {
            let lista = props.botoes.map(valor =>
                <li key={valor} className="nav-item">
                    <a className="nav-link" href="#" onClick={(e) => props.seletorView(valor, e)}>{valor}</a>
                </li>
            )
            return lista
        }
    }

    let tema = props.tema
        return (
            <>
                <nav className="navbar navbar-expand-lg" data-bs-theme="light" style={{ backgroundColor: tema, marginBottom: 10 }}>
                    <div className="container-fluid">
                        <img src={logo} alt="logo" width="33" height="30" className="d-inline-block align-text-top" style={{ marginRight: 10 }}/>
                        <span className="navbar-brand mb-0 h1">PetLovers</span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                {gerarListaBotoes()}
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
}

export default BarraNavegacao