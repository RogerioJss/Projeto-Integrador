import { styled } from "styled-components"
import CoresTemaEscuro from "../../Colors/cores"
import ItemNavegacao from "./ItemNavegacao"
import SVGS from "../../SVGS/svgs"
import { useEffect, useState } from "react"
import Pefil from "./FotoPerfil"
import ModalNotificacao from "../ModalNotificacao"
import { Link, useLocation } from "react-router-dom"

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
    const location = useLocation()
    const pageAtual = location.pathname
    const [itemNotificacao, setItemNotificacao] = useState(false)
    const [itemHome, setItemHome] = useState(true)
    const [itemRelatorio, setItemRelatorio] = useState(false)
    const [stateOpen2, setStateOpen2] = useState(false)
    
    useEffect(()=>{
      if(pageAtual == "/Projeto-Integrador/Relatorios"){
        setItemHome(false)
        setItemRelatorio(true)
      }[pageAtual]
    })
    const itemAtivar = (item) => {
        switch(item) {
            case "notificacao":
                if(pageAtual == "/Projeto-integrador"){
                  setItemNotificacao(true)
                  setItemHome(false)
                  setItemRelatorio(false)
                  if(stateOpen2 === false){
                    setItemNotificacao(false)
                    setItemHome(true)
                  }
                }
                if(pageAtual == "/Projeto-integrador/Relatorios"){
                  setItemNotificacao(true)
                  setItemHome(false)
                  setItemRelatorio(false)
                  if(stateOpen2 === false){
                    setItemNotificacao(false)
                    setItemHome(false)
                    setItemRelatorio(true)
                  }
                }
                break
            case "home":
                if(pageAtual == "/Projeto-Integrador"){
                  setItemHome(true)
                  setItemNotificacao(false)
                  setItemRelatorio(false)
                }
                break
            case "relatorio":
                if(pageAtual == "/Projeto-Integrador/Relatorios"){
                  setItemHome(false)
                  setItemNotificacao(false)
                  setItemRelatorio(true)
                  console.log(itemRelatorio)
                }
                break
        }
        
    }

      const elemento = document.getElementById("meuElemento")
      const modalControleGeral = document.getElementById("modalControleGeral")
      
      const  openModal = () => {
        setStateOpen2(!stateOpen2)
          elemento.classList.add("modalOpacity")
          modalControleGeral.classList.add("modalOpacity")
  
      }

      const closeModal = () => {
        setStateOpen2(false)
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
        <Link to={"/Projeto-Integrador/Relatorios"}>
            <ItemNavegacao
                src={itemRelatorio ? SVGS.IconRelatorioAtivado : SVGS.IconRelatorioDesativado}
                onClick={()=> itemAtivar("relatorio")}
                />
        </Link>
            
        <Link to={"/Projeto-Integrador"}>
            <ItemNavegacao
                src={itemHome ? SVGS.IconHomeAtivado : SVGS.IconHomeDesativado}
                onClick={()=> itemAtivar("home")}
                /> 
        </Link>
        
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