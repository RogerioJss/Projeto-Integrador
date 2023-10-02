import { styled } from "styled-components"
import CoresTemaEscuro from "../../Colors/cores"
import ItemNavegacao from "./ItemNavegacao"
import SVGS from "../../SVGS/svgs"
import { useState } from "react"
import Pefil from "./FotoPerfil"

const HeaderEstilizado = styled.header`
  background-color: ${CoresTemaEscuro.corBackgroundBotoes};
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  margin: 0 0 15px;
`

const ItensContainer = styled.div`
  display: flex;
  gap: 114px;
`

const Header = () => {
    const [itemNotificacao, setItemNotificacao] = useState(false)
    const [itemHome, setItemHome] = useState(true)
    const [itemRelatorio, setItemRelatorio] = useState(false)

    const itemAtivar = (item) => {
        switch(item) {
            case "notificacao":
                setItemNotificacao(true)
                setItemHome(false)
                setItemRelatorio(false)
                break
            case "home":
                setItemHome(true)
                setItemNotificacao(false)
                setItemRelatorio(false)
                break
            case "relatorio":
                setItemNotificacao(false)
                setItemHome(false)
                setItemRelatorio(true)
                break
        }
        
    }

  return (
    <HeaderEstilizado>
      <Pefil />
      <ItensContainer>
        <ItemNavegacao
            src={itemRelatorio ? SVGS.IconRelatorioAtivado : SVGS.IconRelatorioDesativado}
            onClick={()=> itemAtivar("relatorio")}
            />
            
        <ItemNavegacao
            src={itemHome ? SVGS.IconHomeAtivado : SVGS.IconHomeDesativado}
            onClick={()=> itemAtivar("home")}
            /> 
        
            <ItemNavegacao
            src={itemNotificacao ? SVGS.IconNotificacaoAtivado : SVGS.IconNotificacaoDesativado}
            onClick={()=> itemAtivar("notificacao")}
            />
      </ItensContainer>
    </HeaderEstilizado>
  )
}

export default Header;