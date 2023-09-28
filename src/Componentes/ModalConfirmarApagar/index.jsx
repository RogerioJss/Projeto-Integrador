import ReactModal from "react-modal"
import Button from "../Button"
import CoresTemaEscuro from "../../Colors/cores"
import TextosSuperiores from "../Textos"
import TextosInferiores from "../Textos/TextosInferiores"


const ModalConfirmarApagar = ({stateOpen1, stateClose1,closeModal1, idExterno1, idConteudo1,fecharComCliqueDeFora1}) => {
    return(
        <ReactModal isOpen={stateOpen1}
                    onRequestClose={stateClose1}
                    overlayClassName={idExterno1}
                    className={idConteudo1}
                    shouldCloseOnOverlayClick={fecharComCliqueDeFora1}
                    >
                    <TextosSuperiores>Deseja mesmo apagar?</TextosSuperiores>
                    <TextosInferiores>O Terreno será apagado para SEMPRE!!</TextosInferiores>
                    <Button onClick={closeModal1} >Sim</Button>
                    <Button onClick={closeModal1} backgroud={CoresTemaEscuro.corStatusError} >Não</Button>
        </ReactModal>
    )
}

export default ModalConfirmarApagar