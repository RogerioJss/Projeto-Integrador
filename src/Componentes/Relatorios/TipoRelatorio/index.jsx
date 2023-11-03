import styled from "styled-components"
import TextosInferiores from "../../Textos/TextosInferiores"

const TipoRelatorioInput = styled.input.attrs({type:'radio'})`
`
const ConteinerGeral = styled.div`
    display: flex;
    gap: 10px;
`
const TipoRelatorio = ({children})=>{
    return (
    <ConteinerGeral>
        <TipoRelatorioInput/>
        <TextosInferiores>{children}</TextosInferiores>
    </ConteinerGeral>
    )
}

export default TipoRelatorio