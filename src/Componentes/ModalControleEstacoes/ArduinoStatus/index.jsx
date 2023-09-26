import styled from "styled-components";
import Status from "../../Status";
import ButtonMostrarSenha from "../../Login/ButtonMostrarSenha";
import SVGS from "../../../SVGS/svgs";
import CoresTemaEscuro from "../../../Colors/cores";

const ArduinoStatusContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${CoresTemaEscuro.corDivStatusArduino};
    border-radius: 15px;
    min-width: 134px;
    width: 60%;
    padding: 23px;
    
`

const H1Estilizado = styled.h1`
    font-size: 30px;
    color: ${CoresTemaEscuro.corTextos};
`


const ArduinoStatus  = ({status,children}) => {
    return(
        <ArduinoStatusContainer>
            <H1Estilizado>{children}</H1Estilizado>
            <Status status={status}/>
            <ButtonMostrarSenha src={SVGS.IconeAbrirArduino}/>
        </ArduinoStatusContainer>
    )
}

export default ArduinoStatus