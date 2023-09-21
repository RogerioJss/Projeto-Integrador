import { styled } from "styled-components"
import CoresTemaEscuro from "../../Colors/cores"
import ItemNavegacao from "./ItemNavegacao"
import SVGS from "../../SVGS/svgs"
import { useState } from "react"
import Pefil from "./FotoPerfil"


const HeaderEstilizado = styled.header`
    background-color: ${CoresTemaEscuro.corDivs};
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
    const [itemHomeAtivado,setItemHomeAtivado] = useState(true)
    const [itemRelatorioAtivado,setItemRelatorioAtivado] = useState(false)
    const [itemNotificacaoAtivado,setItemNotificacaoAtivado] = useState(false)
    const ativarItem = (item) => {
        switch (item) {
            case "relatorio":
                setItemRelatorioAtivado(true);
                setItemHomeAtivado(false); // Desativando outros itens
                setItemNotificacaoAtivado(false);
                break;
            case "home":
                setItemRelatorioAtivado(false);
                setItemHomeAtivado(true);
                setItemNotificacaoAtivado(false);
                break;
            case "notificacao":
                setItemRelatorioAtivado(false);
                setItemHomeAtivado(false);
                setItemNotificacaoAtivado(true);
                break;
            default:
                break;
        }
    }

    return(
        <HeaderEstilizado>
            <Pefil/>
            <ItensContainer>
                <ItemNavegacao src={itemRelatorioAtivado ? SVGS.IconRelatorioAtivado : SVGS.IconRelatorioDesativado} id={"itemRelatorio"} className={"itemNavecacao"} onClick={()=> ativarItem("relatorio")}/>
                <ItemNavegacao src={itemHomeAtivado ? SVGS.IconHomeAtivado : SVGS.IconHomeDesativado} id={"itemHome"} className={"itemNavecacao"} onClick={() => ativarItem("home")}/>
                <ItemNavegacao src={itemNotificacaoAtivado ? SVGS.IconNotificacaoAtivado : SVGS.IconNotificacaoDesativado} id={"itemNotificacao"} className={"itemNavecacao"} onClick={() => ativarItem("notificacao")}/>
            </ItensContainer>
        </HeaderEstilizado>
    )
}

export default Header