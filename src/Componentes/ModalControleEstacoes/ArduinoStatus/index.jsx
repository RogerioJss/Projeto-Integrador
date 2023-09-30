import styled from "styled-components";
import Status from "../../Status";
import ButtonMostrarSenha from "../../Login/ButtonMostrarSenha";
import SVGS from "../../../SVGS/svgs";
import CoresTemaEscuro from "../../../Colors/cores";
import ModalControleIndividual from "../../ModalControleIndividual";
import { useState } from "react";

const ArduinoStatusContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: whitesmoke;
    border-radius: 15px;
    min-width: 134px;
    width: 60%;
    padding: 23px;
    border: 2px solid ;
    height: 80px;
`

const H1Estilizado = styled.h1`
    font-size: 30px;
    color: ${CoresTemaEscuro.corTextos};
`


const ArduinoStatus  = ({status,children}) => {
    const [openModal, setModalOpen] = useState(false)

    function openControleIndividual(){
        setModalOpen(true)
    }

    function closeControleIndividual(){
        setModalOpen(false)
        
    }
    return(
        <ArduinoStatusContainer>
            <H1Estilizado>{children}</H1Estilizado>
            <Status height="50px" status={status}/>
            <ButtonMostrarSenha src={SVGS.IconeAbrirArduino} onClick={openControleIndividual}/>
            <ModalControleIndividual stateOpen={openModal} stateClose={closeControleIndividual} closeModal={closeControleIndividual} 
            idExterno="controleIndividual" idConteudo="controleIndividualConteudo" fecharComCliqueDeFora={true}/>
        </ArduinoStatusContainer>
    )
}

export default ArduinoStatus