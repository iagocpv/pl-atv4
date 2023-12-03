import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./cliente/listaClientes";
import FormularioCadastroCliente from "./cliente/formularioCadastroCliente";
import ListaPet from "./pet/listaPet";
import ListaProdutos from "./produto/listaProdutos";
import ListaServicos from "./servico/listaServicos";
import Cadastro from "./cadastro";
import FormularioCadastroPet from "./pet/formularioCadastroPet";
import FormularioCadastroProduto from "./produto/formularioCadastroProduto";
import FormularioCadastroServico from "./servico/formularioCadastroServico";
import Compra from "./compra";
import CompraServico from "./servico/compraServico";
import CompraProduto from "./produto/compraproduto";
import Funcoes from "./funcoes";
import ConsumoCliente from "./funcoes/consumoCliente";
import ConsumoProdServ from "./funcoes/consumoProdServ";
import ConsumoTipoRaca from "./funcoes/consumoTipoRaca";
import ConsumoQntd from "./funcoes/consumoQntd";
import ConsumoValor from "./funcoes/consumoValor";

function Roteador(): JSX.Element {
    const [tela, setTela] = useState('Clientes')

    function selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        setTela(novaTela)
    }

    let barraNavegacao = <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Produtos', 'Serviços', 'Cadastros', 'Compras', 'Funções']} />

    
        if (tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Pets') {
            return (
                <>
                    {barraNavegacao}
                    <ListaPet tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProdutos tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Serviços') {
            return (
                <>
                    {barraNavegacao}
                    <ListaServicos tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'CadastroCliente') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'CadastroPet') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroPet tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'CadastroProduto') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProduto tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'CadastroServiço') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroServico tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Cadastros') {
            return (
                <>
                    {barraNavegacao}
                    <Cadastro seletorView={selecionarView} />
                </>
            )
        } else if (tela === 'Compras') {
            return (
                <>
                    {barraNavegacao}
                    <Compra seletorView={selecionarView} />
                </>
            )
        } else if (tela === 'CompraServico') {
            return (
                <>
                    {barraNavegacao}
                    <CompraServico tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'CompraProduto') {
            return (
                <>
                    {barraNavegacao}
                    <CompraProduto tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Funções') {
            return (
                <>
                    {barraNavegacao}
                    <Funcoes seletorView={selecionarView} />
                </>
            )
        } else if (tela === 'ConsumoCliente') {
            return (
                <>
                    {barraNavegacao}
                    <ConsumoCliente tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'ConsumoProdServ') {
            return (
                <>
                    {barraNavegacao}
                    <ConsumoProdServ tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'ConsumoTipoRaca') {
            return (
                <>
                    {barraNavegacao}
                    <ConsumoTipoRaca tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'ConsumoQntd') {
            return (
                <>
                    {barraNavegacao}
                    <ConsumoQntd tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'ConsumoValor') {
            return (
                <>
                    {barraNavegacao}
                    <ConsumoValor tema="#e3f2fd" />
                </>
            )
        }
    return barraNavegacao
}

export default Roteador;