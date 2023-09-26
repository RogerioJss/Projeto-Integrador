import styled from "styled-components"
import IconeInput from "../../Imputs/IconeInputs"
import SVGS from "../../../SVGS/svgs"


const ButtonMostrarSenhaEstilizado = styled.button`
    background: none;
    border: none;
    color: inherit;
    text-decoration: none;
    padding: 0;
    margin: 0;
    outline: none;
    transition: transform 0.3s ease;
    &:hover{
        transform: scale(1.1);
    }
`

const ButtonMostrarSenha = ({onClick,src,id,className}) => {
    return (
        <ButtonMostrarSenhaEstilizado onClick={onClick} id={id}>
            <IconeInput src={src} className={className} /> 
        </ButtonMostrarSenhaEstilizado>
    )
}


export default ButtonMostrarSenha