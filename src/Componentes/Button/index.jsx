import styled from "styled-components"
import CoresTemaEscuro from "../../Colors/cores"

const ButtonEstilizado = styled.button`
    background-color: ${CoresTemaEscuro.corDivs};
    width: 40%;
    height: 60%;
    max-width: 400px;
    min-height: 100px;
    color: ${CoresTemaEscuro.corTextos};
    font-size: 40px;
    border-radius: 20px;
`


const Button = ({children,onClick, className,id}) => {
    return(
    <ButtonEstilizado onClick={onClick} className={className} id={id}>
        {children}
    </ButtonEstilizado>
    )
}

export default Button