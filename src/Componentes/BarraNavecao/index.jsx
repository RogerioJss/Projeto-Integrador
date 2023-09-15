import { styled } from "styled-components"
import CoresTemaEscuro from "../../Colors/cores"
import ItemNavegacao from "./ItemNavegacao"
import SVGS from "../../SVGS/svgs"
import { useState } from "react"

const HeaderEstilizado = styled.header`
    background-color: ${CoresTemaEscuro.corDivs};
`

const Header = () => {
    const [itemHomeAtivado,setItemHomeAtivado] = useState(false)
    const homeAtivado = () =>{
        setItemHomeAtivado(!itemHomeAtivado)
    }
    const [itemRelatorioAtivado,setItemRelatorioAtivado] = useState(false)
    const relatorioAtivado = () => {
        setItemRelatorioAtivado(!itemRelatorioAtivado)
    }
    const [itemNotificacaoAtivado,setItemNotificacaoAtivado] = useState(false)
    const notificacaoAtivado = () =>{
        setItemNotificacaoAtivado(!itemNotificacaoAtivado)
    }
    
    return(
        <HeaderEstilizado>
            <ItemNavegacao src={itemRelatorioAtivado ? SVGS.IconRelatorioAtivado : SVGS.IconRelatorioDesativado} id={"itemRelatorio"} className={"itemNavecacao"} onClick={relatorioAtivado}/>
            <ItemNavegacao src={itemHomeAtivado ? SVGS.IconHomeAtivado : SVGS.IconHomeDesativado} id={"itemHome"} className={"itemNavecacao"} onClick={homeAtivado}/>
            <ItemNavegacao src={itemNotificacaoAtivado ? SVGS.IconNotificacaoAtivado : SVGS.IconNotificacaoDesativado} id={"itemNotificacao"} className={"itemNavecacao"} onClick={notificacaoAtivado}/>
        </HeaderEstilizado>
    )
}

export default Header