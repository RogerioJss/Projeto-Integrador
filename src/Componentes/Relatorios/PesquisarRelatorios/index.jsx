import styled from "styled-components"
import CalendarioPesquisa from "../CalendarioBusca"
import RelatoriosGerados from "../RelatoriosGerados"
import CoresTemaEscuro from "../../../Colors/cores"


const PesquisaContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    border: 2px solid ${CoresTemaEscuro.corBackgroundBotoes};
    border-radius: 15px;
    padding: 10px;
    gap: 15px;
    margin: 0 15px;
`

const PesquisarRelatorios = () => {
    return(
        <PesquisaContainer>
           <CalendarioPesquisa/>
           <RelatoriosGerados/>
           <RelatoriosGerados/>
           <RelatoriosGerados/>
        </PesquisaContainer>
    )
}

export default PesquisarRelatorios