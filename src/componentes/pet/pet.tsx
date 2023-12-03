import { useState } from "react";
import { BsChevronDown, BsXLg } from "react-icons/bs";
import Swal from "sweetalert2";
import EditarPet from "./editarPet";

type props = {
    id: number,
    nome: string,
    tipo: string,
    raca: string,
    idDono: number
}

function Pet(props: props) {

    const [show, setShow] = useState(false)

    const toggleShow = () => setShow(!show);
    function deletar() {
        Swal.fire({
            title: "Tem certeza que quer excluir o pet?",
            showCancelButton: true,
            confirmButtonText: "Excluir",
            confirmButtonColor: 'firebrick',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Pet excluido", "", "success");
            }
          });
        }

        return(
            <div className="list-group-item list-group-item-action">
                <div className="item-listado">
                    <div className="conteudo">
                        <span>{props.id}</span>
                        <span>{props.nome}</span>
                    </div>
                    <div className="acoes">
                        <EditarPet
                            id={props.id}
                            nome={props.nome}
                            tipo={props.tipo}
                            raca={props.raca}
                            idDono={props.idDono}
                        ></EditarPet>
                        <BsXLg className="icone" style={{color: 'red'}} onClick={deletar}/>
                        <BsChevronDown onClick={toggleShow} className="icone"/>
                    </div>
                </div>
                {show && 
                    <div>
                        <div className="detalhes">
                            <div className="detalhes-item">
                                <div><b>Id dono:  </b>{props.idDono}</div>
                                <div><b>Nome:  </b>{props.nome}</div>
                                <div><b>Tipo:  </b>{props.tipo}</div>
                                <div><b>Raça:  </b>{props.raca}</div>
        
                            </div>                            
                        </div>
                    </div>
                }                
            </div>
        )
    }

export default Pet