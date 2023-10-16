import styled from "styled-components"
import SVGS from "../../../SVGS/svgs"
import IconeInput from "../../Imputs/IconeInputs"
import TextosInferiores from "../../Textos/TextosInferiores"
import ButtonMostrarSenha from "../../Login/ButtonMostrarSenha"

const ContainerRelatorios = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid black;
    border-radius: 10px;
    background-color: whitesmoke;
    gap: 20px;
    padding: 10px;
`


const RelatoriosGerados = () => {
    return(
        <ContainerRelatorios>
            <IconeInput src={SVGS.IconRelatorio}/>
            <TextosInferiores>05/10/2023-14:00</TextosInferiores>
            <ButtonMostrarSenha src={SVGS.IconeAbrirArduino}/>
        </ContainerRelatorios>
    )
}

export default RelatoriosGerados