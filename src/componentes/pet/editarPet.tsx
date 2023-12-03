import { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsPencil } from 'react-icons/bs';
import './../style.css'

type props = {
    id: number,
    nome: string,
    tipo: string,
    raca: string,
    idDono: number
}

function EditarPet(props: props) {
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
                <Modal.Title>Editar pet</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='form-cliente container-fluid'>
                        <form id='editar-pet'>
                            <div>
                                <label htmlFor="nome">Nome</label>
                                <input className="form-control" id="nome" type="text" defaultValue={props.nome}></input>
                            </div>
                            <div>
                                <label htmlFor="tipo">Tipo</label>
                                <input className="form-control" id="tipo" type="text" defaultValue={props.tipo}></input>
                            </div>
                            <div>
                                <label htmlFor="raca">Raça</label>
                                <input className="form-control" id="raca" type="text" defaultValue={props.raca}></input>
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
export default EditarPet