import ReactModal from "react-modal"
import Button from "../Button"
import CoresTemaEscuro from "../../Colors/cores"

const StyleBotton = (status1) => {
    switch(status1){
        case "LIGAR":
            return{
                children: "Ligar Todos",
                borderColor: CoresTemaEscuro.corVerdePositivo,
                color: CoresTemaEscuro.corVerdePositivo,
            }
        case "DESLIGAR":
            return{
                children: "Desligar Todos",
                borderColor: CoresTemaEscuro.corVermelhoNegativo,
                color: CoresTemaEscuro.corVermelhoNegativo,
            }
    }
}


const ModalControle = ({stateOpen1, stateClose1,closeModal1, idExterno1, idConteudo1, fecharComCliqueDeFora1,status1}) => {
    const {children, borderColor, color} = StyleBotton(status1);
    return(
        
        <ReactModal isOpen={stateOpen1}
                    onRequestClose={stateClose1}
                    overlayClassName={idExterno1}
                    className={idConteudo1}
                    shouldCloseOnOverlayClick={fecharComCliqueDeFora1}
                    >
                    <Button onClick={closeModal1} borderColor={borderColor} color={color} >{children}</Button>
        </ReactModal>

    )
}

export default ModalControle