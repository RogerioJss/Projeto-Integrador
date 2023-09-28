import { styled } from "styled-components"
import CoresTemaEscuro from "../../Colors/cores"
import ItemNavegacao from "./ItemNavegacao"
import SVGS from "../../SVGS/svgs"
import { useState } from "react"
import Pefil from "./FotoPerfil"


const HeaderEstilizado = styled.header`
    background-color: ${CoresTemaEscuro.corBackgroundBotoes};
    min-height: 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
`

const ItensContainer = styled.div`
    display: flex;
    gap: 114px;
`

const Header = () => {
    const [itemNotificacaoAtivado,setItemNotificacaoAtivado] = useState(true)
   function AtivarRelatorio(){
        setItemNotificacaoAtivado(!itemNotificacaoAtivado)
   }
       

    return(
        <HeaderEstilizado>
            <Pefil/>
            <ItensContainer>
                <ItemNavegacao src={itemNotificacaoAtivado ? SVGS.IconNotificacaoAtivado : SVGS.IconNotificacaoDesativado} id={"itemNotificacao"} className={"itemNavecacao"} onClick={AtivarRelatorio}/>
            </ItensContainer>
        </HeaderEstilizado>
    )
}

export default Header