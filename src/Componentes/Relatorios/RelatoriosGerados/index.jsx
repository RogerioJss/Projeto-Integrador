import styled from "styled-components"
import SVGS from "../../../SVGS/svgs"
import IconeInput from "../../Imputs/IconeInputs"
import TextosInferiores from "../../Textos/TextosInferiores"
import ButtonMostrarSenha from "../../Login/ButtonMostrarSenha"

const ContainerRelatorios = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 0.125rem solid black;
    border-radius: 0.625rem;
    background-color: whitesmoke;
    gap: 0.125rem;
    padding: 0.625rem;
    max-width: 100%;
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