import styled from "styled-components"
import IconeInput from "../Imputs/IconeInputs/index.jsx"
import SVGS from "../../SVGS/svgs.jsx"
import NomeArduino from "./NomeArduino/index.jsx"
import Texto from "./TextoEstilizado/index.jsx"


const ContainerNotificacao = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid;
    background-color: whitesmoke;
    border-radius: 10px;
    position: relative;
    gap: 18px;
    width: 75%;
    padding: 0 10px;
`

const Notificacao = ({chindren,text,data}) => {
    return(
        <ContainerNotificacao>
            <NomeArduino>{chindren}</NomeArduino>
            <Texto font="15px">{text}</Texto>
            <Texto font="12px" position="absolute">{data}</Texto>
        </ContainerNotificacao>
    )
}

export default Notificacao