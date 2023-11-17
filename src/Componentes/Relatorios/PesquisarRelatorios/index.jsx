import styled from "styled-components"
import CalendarioPesquisa from "../CalendarioBusca"
import RelatoriosGerados from "../RelatoriosGerados"
import CoresTemaEscuro from "../../../Colors/cores"
import TextosInferiores from "../../Textos/TextosInferiores"
import SVGS from "../../../SVGS/svgs"
import ButtonMostrarSenha from "../../Login/ButtonMostrarSenha"


const PesquisaContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    @media (min-width: 768px) {
        width: 40%;
        margin: 0 0.9375rem;
    }
    border: 0.125rem solid ${CoresTemaEscuro.corBackgroundBotoes};
    border-radius: 0.9375rem;
    padding: 0.625rem;
    gap: 15px;
    
    
`
const ContainerDataPicker = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`

const PesquisarRelatorios = () => {
    return(
        <PesquisaContainer>
            <ContainerDataPicker>
                <TextosInferiores>De</TextosInferiores>
                <CalendarioPesquisa />
                <TextosInferiores>Até</TextosInferiores>
                <CalendarioPesquisa/>
                <ButtonMostrarSenha src={SVGS.IconLupa}/>
            </ContainerDataPicker>
           <RelatoriosGerados/>
           <RelatoriosGerados/>
           <RelatoriosGerados/>
        </PesquisaContainer>
    )
}

export default PesquisarRelatorios