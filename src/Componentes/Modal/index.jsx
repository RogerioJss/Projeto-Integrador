import ReactModal from "react-modal";
import styled from "styled-components";

ReactModal.setAppElement("#root");

const ButtonEstilizado = styled.button`
background-color: red;
`

const Modal = ({stateOpen, stateClose, idExterno, idConteudo,closeModal}) =>{
    return(
    <ReactModal isOpen={stateOpen}
                onRequestClose={stateClose}
                overlayClassName={idExterno} 
                className={idConteudo}>
                <ButtonEstilizado onClick={closeModal}>Close MOdal</ButtonEstilizado>
    </ReactModal>
    )
}


export default Modal
