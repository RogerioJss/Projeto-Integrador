import styled from "styled-components"
import Button from "../Button"
import ContainerConteudo from "../ContainerConteudo"
import ModalAddTerreiro from "../ModalAddTerreiro"
import { useState } from "react"

import CoresTemaEscuro from "../../Colors/cores"
import InputText from "../Imputs"
import ArduinoStatus from "../ArduinoStatus"

const ContainerGeral = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`
const ConteudoEstilizado = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    min-width: 0;
    border: 2px solid ${CoresTemaEscuro.corBackgroundBotoes};
    border-radius: 0.625rem;
`

const ContainerControleGeral =  styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;
  width: 40%;
  min-width: 20.8125rem;
  gap: 1.4rem;
  padding: 2rem;
  border-radius: 1.25rem;
  border: 0.125rem solid ${CoresTemaEscuro.corBackgroundBotoes};
`
const StyleBotton = (status1) => {
    switch(status1){
        case "LIGAR":
            return{
                children: "Ligar Todos",
                borderColor: CoresTemaEscuro.corVerdePositivo,
                color: CoresTemaEscuro.corTextoBotoes,
                background: CoresTemaEscuro.corBackgroundBotoes
            }
        case "DESLIGAR":
            return{
                children: "Desligar Todos",
                borderColor: CoresTemaEscuro.corVermelhoNegativo,
                color: CoresTemaEscuro.corTextoBotoes,
                background: CoresTemaEscuro.corStatusError
            }
    }
}

const Conteudo = ({status1}) => {
    const {children, borderColor, color,background} = StyleBotton(status1);
    const [modalOpen, setModalClose] = useState(false);

    function openModal (){
        setModalClose(true);
        const elemento = document.getElementById("meuElemento")
        const modalControleGeral = document.getElementById("modalControleGeral")
        elemento.classList.add("modalOpacity")
        modalControleGeral.classList.add("modalOpacity")
    }
    
    function closeModal(){
        setModalClose(false);
        const elemento = document.getElementById("meuElemento")
        const modalControleGeral = document.getElementById("modalControleGeral")
        elemento.classList.remove("modalOpacity")
        modalControleGeral.classList.remove("modalOpacity")
    }
    return(
        <ContainerGeral>
            <ConteudoEstilizado>
                <ContainerConteudo/>
                <Button className="button" id="button1" onClick={openModal} heigth="29%" minHeight="80px" >Adicionar Terreiro</Button>
                <ModalAddTerreiro stateOpen={modalOpen} stateClose={closeModal} closeModal={closeModal} idExterno="modalTerreiroExterno" 
                idConteudo="modalTerreiroConteudo" fecharComCliqueDeFora={false}/>
            </ConteudoEstilizado>
            <ContainerControleGeral>
                    <InputText type='text' placeholder="Pesquise o nome do arduino" width="90%"/>
                    <ArduinoStatus status="ON">1A</ArduinoStatus>
                    <ArduinoStatus status="OFF">3A</ArduinoStatus>
                    <ArduinoStatus status="ALERT">5A</ArduinoStatus>
                    <ArduinoStatus status="ERROR">8A</ArduinoStatus>
                    <Button  borderColor={borderColor} color={color}  backgroud={background}
                    width="40%" heigth="10%" minHeight="70px" >{children}</Button>
            </ContainerControleGeral>
        </ContainerGeral>
    
    )
}


export default Conteudo