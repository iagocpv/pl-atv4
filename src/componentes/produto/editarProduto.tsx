import { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsPencil } from 'react-icons/bs';
import './../style.css'

type props = {
    id: number,
    nome: string,
    valor: number,
    quantidade: number
}

function EditarProduto(props: props) {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <BsPencil onClick={handleShow} className="edit"/>

            <Modal
                size='lg'
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                <Modal.Title>Editar produto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='form-cliente container-fluid'>
                        <form id='editar-produto'>
                            <div>
                                <label htmlFor="nome">Nome</label>
                                <input className="form-control" id="nome" type="text" defaultValue={props.nome}></input>
                            </div>
                            <div>
                                <label htmlFor="valor">Valor</label>
                                <input className="form-control" id="valor" type="text" defaultValue={props.valor}></input>
                            </div>
                        </form>
                    </div>
                
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Fechar</Button>
                <button className='btn btn-primary' type='button'>Editar</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditarProduto