import ReactModal from "react-modal";
import styled from "styled-components";
import ProfilePictureUpload from "./ProfilePicture";
import IconeInput from "../Imputs/IconeInputs";
import { Dados } from "../UserData/user";
import CoresTemaEscuro from "/src/Colors/cores.js"

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
    color: ${CoresTemaEscuro.corTitulos};
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
                    <h2>Nome</h2>
                    <p>{Dados.Usuario.Nome}</p>
                    <h2>Empresa</h2>
                    <p>{Dados.Usuario.Empresa}</p>
                    <h2>QT de Terreiros</h2>
                    <p>{Dados.Usuario.Quantidade_Terrenos}</p>
                    <h2>CNPJ</h2>
                    <p>{Dados.Usuario.CNPJ}</p>
                </ContainerTextos>  
                <ButtonEstilizado onClick={closeModal} >
                    <IconeInput src={src} className={className} id={id}/>
                </ButtonEstilizado>
    </ReactModal>
    )
}


export default Modal
