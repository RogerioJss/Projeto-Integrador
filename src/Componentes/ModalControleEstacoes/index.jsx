import ReactModal from "react-modal"
import Button from "../Button"
import CoresTemaEscuro from "../../Colors/cores"
import Status from "../Status"
import InputText from "../Imputs"
import ArduinoStatus from "./ArduinoStatus"
import ModalControleIndividual from "../ModalControleIndividual"

const StyleBotton = (status1) => {
    switch(status1){
        case "LIGAR":
            return{
                children: "Ligar Todos",
                borderColor: CoresTemaEscuro.corVerdePositivo,
                color: CoresTemaEscuro.corTextoBotoes,
                background: CoresTemaEscuro.corBackgroundBotoes
            }
        case "DESLIGAR":
            return{
                children: "Desligar Todos",
                borderColor: CoresTemaEscuro.corVermelhoNegativo,
                color: CoresTemaEscuro.corTextoBotoes,
                background: CoresTemaEscuro.corStatusError
            }
    }
}


const ModalControle = ({stateOpen1, stateClose1,closeModal1, idExterno1, idConteudo1, fecharComCliqueDeFora1,status1}) => {
    const {children, borderColor, color,background} = StyleBotton(status1);
    return(
        
        <ReactModal isOpen={stateOpen1}
                    onRequestClose={stateClose1}
                    overlayClassName={idExterno1}
                    className={idConteudo1}
                    shouldCloseOnOverlayClick={fecharComCliqueDeFora1}
                    >
                    <InputText type='text' placeholder="Pesquise o nome do arduino"/>
                    <ArduinoStatus status="ON">1A</ArduinoStatus>
                    <ArduinoStatus status="OFF">3A</ArduinoStatus>
                    <ArduinoStatus status="ALERT">5A</ArduinoStatus>
                    <ArduinoStatus status="ERROR">8A</ArduinoStatus>
                    <Button onClick={closeModal1} borderColor={borderColor} color={color}  backgroud={background}>{children}</Button>
        </ReactModal>

    )
}

export default ModalControle