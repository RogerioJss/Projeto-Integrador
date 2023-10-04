import { styled } from "styled-components"
import CoresTemaEscuro from "../../Colors/cores"
import ItemNavegacao from "./ItemNavegacao"
import SVGS from "../../SVGS/svgs"
import { useState } from "react"
import Pefil from "./FotoPerfil"
import ModalNotificacao from "../ModalNotificacao"

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
                if(itemNotificacao == true){
                  setItemNotificacao(false)
                  setItemHome(true)
                }
                if(stateOpen2 == false){
                  setItemNotificacao(false)
                  setItemHome(true)
                }
                break
            case "home":
                setItemHome(true)
                setItemNotificacao(false)
                setItemRelatorio(false)
                setStateOpen2(false)
                break
            case "relatorio":
                setItemNotificacao(false)
                setItemHome(false)
                setItemRelatorio(true)
                setStateOpen2(false)
                break
        }
        
    }

      const [stateOpen2, setStateOpen2] = useState(false)

      const  openModal = () => {
        setStateOpen2(!stateOpen2)
        const elemento = document.getElementById("meuElemento")
        const modalControleGeral = document.getElementById("modalControleGeral")
        elemento.classList.add("modalOpacity")
        modalControleGeral.classList.add("modalOpacity")
      }

      const closeModal = () => {
        setStateOpen2(false)
        const elemento = document.getElementById("meuElemento")
        const modalControleGeral = document.getElementById("modalControleGeral")
        elemento.classList.remove("modalOpacity")
        modalControleGeral.classList.remove("modalOpacity")
      }
      
      const geral = () => {
        itemAtivar("notificacao")
        openModal()
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
            onClick={()=> geral()}
            />
      </ItensContainer>
      <ModalNotificacao  stateOpen={stateOpen2} stateClose={openModal} idConteudo="modalNotificacaoConteudo" 
      idExterno="modalNotificacaoExterno" closeModal={closeModal} />
    </HeaderEstilizado>
  )
}

export default Header;