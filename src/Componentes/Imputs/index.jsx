import styled from "styled-components";
import IconeInput from "./IconeInputs";
import CoresTemaEscuro from "../../Colors/cores";

const CaixasTexto = styled.input`
    width: 493px;
    height: 61px;
    text-align: center;
    border-radius: 7px;
    border: 1px solid ${CoresTemaEscuro.corBordaInputs};
    background: ${CoresTemaEscuro.corInputs};
    color: ${CoresTemaEscuro.corTextos};
    text-align: center;
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

    
const InputText = ({placeholder,type,id }) => {
    return( 
        <CaixasTexto type = {type} placeholder={placeholder} id={id}/>
    )
}

export default InputText