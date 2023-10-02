import styled from "styled-components"
import Button from "../Button"
import ContainerConteudo from "../ContainerConteudo"
import ModalAddTerreiro from "../ModalAddTerreiro"
import { useState } from "react"
import ModalControle from "../ModalControleEstacoes"
import CoresTemaEscuro from "../../Colors/cores"

const ConteudoEstilizado = styled.section`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    border: 2px solid ${CoresTemaEscuro.corBackgroundBotoes};
    border-radius: 10px;
    width: 50%;
    height: 83vh;
    top: 16.5vh;
    padding-bottom: 40px;
    margin: 0 0 0 30px;
`

const Conteudo = () => {
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

    const [modalOpen1, setModalClose1] = useState(true);
    return(
    <ConteudoEstilizado>
        <ContainerConteudo/>
        <Button className="button" id="button1" onClick={openModal} heigth="29%" mimHeight="80px">Adicionar Terreiro</Button>
        <ModalAddTerreiro stateOpen={modalOpen} stateClose={closeModal} closeModal={closeModal} idExterno="modalTerreiroExterno" 
        idConteudo="modalTerreiroConteudo" fecharComCliqueDeFora={false}/>
        <ModalControle stateOpen1={modalOpen1}  idExterno1="modalControleExterno" idConteudo1="modalControleConteudo" 
        fecharComCliqueDeFora1={false} status1="LIGAR"/>
    </ConteudoEstilizado>
    )
}


export default Conteudo