import styled from "styled-components"
import CoresTemaEscuro from "../../Colors/cores"

const ButtonEstilizado = styled.button`
    background-color: ${(props) => props.backgroud || CoresTemaEscuro.corBackgroundBotoes};
    width: 40%;
    height: 60%;
    max-width: 400px;
    min-height: 100px;
    color: ${(props) => props.color || CoresTemaEscuro.corTextoBotoes};
    font-size: 30px;
    border-radius: 20px;
    border: 2px solid ${(props) => props.borderColor };
    transition: transform 0.3s ease;
    &:hover{
        transform: scale(1.1);
    }
`


const Button = ({children,onClick, className,id,borderColor,color, backgroud}) => {
    return(
    <ButtonEstilizado onClick={onClick} className={className} id={id} borderColor={borderColor} color={color} backgroud={backgroud}>
        {children}
    </ButtonEstilizado>
    )
}

export default Button