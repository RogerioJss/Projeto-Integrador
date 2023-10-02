import ReactModal from "react-modal"
import styled from "styled-components";
import InputText from "../Imputs";
import IconeInput from "../Imputs/IconeInputs";
import Button from "../Button";
import CoresTemaEscuro from "../../Colors/cores";

ReactModal.setAppElement("#root");


const ModalContainer = styled.div`
    position: relative;
    
`
const TituloEstilizado = styled.h1`
    color: ${CoresTemaEscuro.corBackgroundBotoes};
    font-size: 50px;

`
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

`
const ParagrafoEstilizado = styled.p`
    color: ${CoresTemaEscuro.corTextoBotoes};
    font-size: 30px;
`
const ModalAddTerreiro = ({stateOpen, stateClose,closeModal, idExterno, idConteudo, fecharComCliqueDeFora}) => {
    return(
        <ModalContainer>
             <ReactModal isOpen={stateOpen}
                    onRequestClose={stateClose}
                    overlayClassName={idExterno}
                    className={idConteudo}
                    shouldCloseOnOverlayClick={fecharComCliqueDeFora}
                   >
                <TituloEstilizado>Add. Terreiros</TituloEstilizado>
                <InputContainer>
                   <InputText placeholder="Nome do Terreiro"/>
                   <InputText placeholder="Ip do Terreiro"/>
                </InputContainer>   
                <Button onClick={closeModal} color={CoresTemaEscuro.corTextoBotoes}>
                        <ParagrafoEstilizado>Adicionar</ParagrafoEstilizado>
                </Button>  
            </ReactModal>
        </ModalContainer>
       
        )
}

export default ModalAddTerreiro