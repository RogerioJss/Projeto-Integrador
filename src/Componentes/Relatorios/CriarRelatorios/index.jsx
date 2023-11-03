import styled from "styled-components"
import Dropdown from "../DropDown"
import CoresTemaEscuro from "../../../Colors/cores"
import CalendarioPesquisa from "../CalendarioBusca"
import TipoRelatorio from "../TipoRelatorio"
import Button from "../../Button"
import TextosInferiores from "../../Textos/TextosInferiores"
const ConteinerGeral = styled.div`    
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    border: 0.125rem solid ${CoresTemaEscuro.corBackgroundBotoes};
    border-radius: 0.9375rem;
    padding: 2rem;
    gap: 15px;
    margin: 0 0.9375rem;
    min-width: 21.8125rem;
    gap: 2rem;

`

const ConteinerTipoRelatorio = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40%;
`



const CriarRelatorios = () => {

    return(
            <ConteinerGeral>
                <Dropdown/>
                <TextosInferiores>De</TextosInferiores>
                <CalendarioPesquisa/>
                <TextosInferiores>Até</TextosInferiores>
                <CalendarioPesquisa/>
                <ConteinerTipoRelatorio>
                    <TipoRelatorio>PDF</TipoRelatorio>
                    <TipoRelatorio>CSV</TipoRelatorio>
                </ConteinerTipoRelatorio>
                <Button>Criar Relatorio</Button>
            </ConteinerGeral>
                
    )
}

export default CriarRelatorios