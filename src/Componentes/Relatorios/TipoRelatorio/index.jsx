import styled from "styled-components"
import TextosInferiores from "../../Textos/TextosInferiores"
import { useState } from "react"


const TipoRelatorioInput = styled.input.attrs({type:'checkbox'})`
 border-radius: 50%;
`
const ConteinerGeral = styled.div`
    display: flex;
    gap: 10px;
`
const TipoRelatorio = ({children})=>{
    const [tipoRelatorioValue, setTipoRelatorioValue] = useState(false)
    function ValorTipoRelatorio(){
        setTipoRelatorioValue(!tipoRelatorioValue)
        console.log(tipoRelatorioValue)
    }
    return (
    <ConteinerGeral>
        <TipoRelatorioInput value={tipoRelatorioValue} onChange={ValorTipoRelatorio}/>
        <TextosInferiores>{children}</TextosInferiores>
    </ConteinerGeral>
    )
}

export default TipoRelatorio