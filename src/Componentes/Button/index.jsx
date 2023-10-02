import styled from "styled-components"
import CoresTemaEscuro from "../../Colors/cores"

const ButtonEstilizado = styled.button`
    background-color: ${(props) => props.backgroud || CoresTemaEscuro.corBackgroundBotoes};
    width: ${props => props.width || "40%"};
    height: ${props => props.heigth || "60%"};
    max-width: 400px;
    min-height: ${props => props.mimHeight || "100px"};
    max-height: 80px;
    color: ${(props) => props.color || CoresTemaEscuro.corTextoBotoes};
    font-size: 30px;
    border-radius: 20px;
    border: 2px solid ${(props) => props.borderColor };
    transition: transform 0.3s ease;
    &:hover{
        transform: scale(1.1);
    }
`


const Button = ({children,onClick, className,id,borderColor,color, backgroud,width,heigth,mimHeight}) => {
    return(
    <ButtonEstilizado onClick={onClick} className={className} id={id} borderColor={borderColor} color={color} backgroud={backgroud}
    width={width} heigth={heigth} mimHeight={mimHeight}>
        {children}
    </ButtonEstilizado>
    )
}

export default Button