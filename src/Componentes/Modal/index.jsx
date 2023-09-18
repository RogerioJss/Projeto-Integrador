import ReactModal from "react-modal";
import styled from "styled-components";
import ProfilePictureUpload from "./ProfilePicture";

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
                 <ProfilePictureUpload/>   
                <ButtonEstilizado onClick={closeModal}>Close MOdal</ButtonEstilizado>
    </ReactModal>
    )
}


export default Modal
