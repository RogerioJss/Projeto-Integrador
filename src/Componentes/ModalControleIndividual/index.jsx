import ReactModal from "react-modal"
import Button from "../Button"
import CoresTemaEscuro from "../../Colors/cores";
import Status from "../Status";
import Switch from "./Switch";
import styled from "styled-components";
import ModalConfirmarApagar from "../ModalConfirmarApagar";
import { useState } from "react";

ReactModal.setAppElement("#root");

const TituloEstilizado = styled.h1`
    color: ${CoresTemaEscuro.corBackgroundBotoes};
    font-size: 40px;
    
`

const ModalControleIndividual = ({stateOpen, stateClose, idExterno, idConteudo, fecharComCliqueDeFora, estado}) => {
    const [modalOpen, setModalOpen] = useState(false)

    function openModal12 () {
        setModalOpen(true)
        const controleIndividual = document.getElementById("controleIndividual")
        controleIndividual.classList.add("modalOpacity")
    }

    function closeModal12 () {
        setModalOpen(false)
        const controleIndividual = document.getElementById("controleIndividual")
        controleIndividual.classList.remove("modalOpacity")
    }

    function fecharDuasModais(){
        const elemento = document.getElementById("meuElemento")
        elemento.classList.remove("modalOpacity")
        setModalOpen(false)
        estado(false)
    }
    return(
        <ReactModal isOpen={stateOpen}
                    onRequestClose={stateClose}
                    overlayClassName={idExterno}
                    className={idConteudo}
                    shouldCloseOnEsc={fecharComCliqueDeFora}
                    id="controleIndividual"
                    estado={estado}>
                <TituloEstilizado>1A</TituloEstilizado>
                <Status status="ON">Status</Status>
                <Switch/>
                <Button onClick={openModal12} borderColor={CoresTemaEscuro.corVermelhoNegativo} color={CoresTemaEscuro.corTextoBotoes} 
                backgroud={CoresTemaEscuro.corStatusError}>Apagar</Button>
                <ModalConfirmarApagar  stateOpen1={modalOpen} stateClose1={closeModal12}  closeModal1={closeModal12} fecharDuasModais={fecharDuasModais} 
                idExterno1="modalConfirmarApagar" idConteudo1="modalConfirmarApagarConteudo" fecharComCliqueDeFora1={false}/>
        </ReactModal>
    )
}

export default ModalControleIndividual