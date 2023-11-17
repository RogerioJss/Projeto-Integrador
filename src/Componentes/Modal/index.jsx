import ReactModal from "react-modal";
import styled from "styled-components";
import ProfilePictureUpload from "./ProfilePicture";
import IconeInput from "../Imputs/IconeInputs";
import { Dados } from "../UserData/user";
import CoresTemaEscuro from "/src/Colors/cores.js"
import DadosComponente from "./Dados";

ReactModal.setAppElement("#root");

const ButtonEstilizado = styled.button`
  all: initial;
`

const ContainerTextos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    

 color: ${CoresTemaEscuro.corTextos};

 h1{
    color: ${CoresTemaEscuro.corBackgroundBotoes};
 }

 h2{
    color: ${CoresTemaEscuro.corTitulos};
 }
 p{
    padding: 10px;
    font-size: 20px;
 }
`

const Modal = ({stateOpen, stateClose, idExterno, idConteudo,closeModal,fecharComCliqueFora,src,className,id}) =>{
    return(
    <ReactModal isOpen={stateOpen}
                onRequestClose={stateClose}
                overlayClassName={idExterno} 
                className={idConteudo}
                shouldCloseOnOverlayClick={fecharComCliqueFora}
                >
                 <ProfilePictureUpload/> 
                 <ContainerTextos id="textoTelaUsuarios">
                    <h1>{Dados.Usuario.Nome}</h1>
                    <DadosComponente/>
                </ContainerTextos>  
                <ButtonEstilizado onClick={closeModal} >
                    <IconeInput src={src} className={className} id={id}/>
                </ButtonEstilizado>
    </ReactModal>
    )
}


export default Modal
