import styled from "styled-components"
import CoresTemaEscuro from "../../Colors/cores"

const ContainerStatus = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

const H1Estilizado = styled.div`
    font-size: 30px;
    color: ${CoresTemaEscuro.corTextos};
`

const DivStatus = styled.div`
    background-color: ${(props) => props.color};
    font-size: 40px;
    color: white;
    border-radius: 10px;
    min-width: 185px;
    height: 84px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyleStatus = (status) =>{
    switch(status){
        case "ON" :
            return{
                text: "ON",
                color: CoresTemaEscuro.corStatusOn
            }
        case "OFF":
            return{
                text: "OFF",
                color: CoresTemaEscuro.corStatusOff
            }
        case "ALERT":
            return{
                text: "ALERT",
                color: CoresTemaEscuro.corStatusAlert
            }
        case "ERROR":
            return{
                text:"ERROR",
                color: CoresTemaEscuro.corStatusError
            }
        default:
            return {
                text: "Unknown",
                color: "gray"
            };
    }
}

const Status = ({status, children}) => {
    const {text, color} = StyleStatus(status);
    return(
        <ContainerStatus >
                <H1Estilizado>{children}  </H1Estilizado>
                <DivStatus color={color}>{text}</DivStatus>
        </ContainerStatus>
    )
}


export default Status