import styled from "styled-components"
import CoresTemaEscuro from "../../Colors/cores"

const ButtonEstilizado = styled.button`
    background-color: ${CoresTemaEscuro.corDivs};
    width: 40%;
    height: 60%;
    max-width: 400px;
    min-height: 100px;
    color: ${(props) => props.color || CoresTemaEscuro.corTextos};
    font-size: 40px;
    border-radius: 20px;
    border: 2px solid ${(props) => props.borderColor };
    transition: transform 0.3s ease;
    &:hover{
        transform: scale(1.1);
    }
`


const Button = ({children,onClick, className,id,borderColor,color}) => {
    return(
    <ButtonEstilizado onClick={onClick} className={className} id={id} borderColor={borderColor} color={color} >
        {children}
    </ButtonEstilizado>
    )
}

export default Button