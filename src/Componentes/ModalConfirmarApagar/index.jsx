import ReactModal from "react-modal"
import Button from "../Button"
import CoresTemaEscuro from "../../Colors/cores"
import TextosSuperiores from "../Textos"
import TextosInferiores from "../Textos/TextosInferiores"
import styled from "styled-components"

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
`

const ModalConfirmarApagar = ({stateOpen1, stateClose1,closeModal1,fecharDuasModais, idExterno1, idConteudo1,fecharComCliqueDeFora1}) => {
    return(
        <ReactModal isOpen={stateOpen1}
                    onRequestClose={stateClose1}
                    overlayClassName={idExterno1}
                    className={idConteudo1}
                    shouldCloseOnOverlayClick={fecharComCliqueDeFora1}
                    >
                    <TextosSuperiores>Deseja mesmo apagar?</TextosSuperiores>
                    <TextosInferiores>O Terreno será retirado do sistema.</TextosInferiores>
                    <ButtonContainer>
                        <Button onClick={fecharDuasModais}  >Sim</Button>
                        <Button onClick={closeModal1} backgroud={CoresTemaEscuro.corStatusError} >Não</Button>
                    </ButtonContainer>
        </ReactModal>
    )
}

export default ModalConfirmarApagar