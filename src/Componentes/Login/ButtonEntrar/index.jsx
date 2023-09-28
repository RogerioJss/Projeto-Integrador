import styled from "styled-components"
import CoresTemaEscuro from "../../../Colors/cores"
const ButtonEstilizado = styled.button`
    color: ${CoresTemaEscuro.corTextoBotoes};
    background-color: ${CoresTemaEscuro.corBackgroundBotoes};
    border: 10px ${CoresTemaEscuro.corBordaInputs};
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 24px;
    border-radius:10px;
    max-width: 200px;
    max-height: 78px;
    text-align: center;
`

const ButtonEntrar = ({children, onclick}) => {
    return (
        <ButtonEstilizado onClick={onclick}>
            {children}
        </ButtonEstilizado>
    )
}

export default ButtonEntrar