import styled from "styled-components"
import CoresTemaEscuro from "../../../Colors/cores"
const ButtonEstilizado = styled.button`
    color: ${CoresTemaEscuro.corTextos};
    background-color: ${CoresTemaEscuro.corInputs};
    border: 10px ${CoresTemaEscuro.corBordaInputs};
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 24px;
    
`

const ButtonEntrar = ({children, onclick}) => {
    return (
        <ButtonEstilizado onClick={onclick}>
            {children}
        </ButtonEstilizado>
    )
}

export default ButtonEntrar