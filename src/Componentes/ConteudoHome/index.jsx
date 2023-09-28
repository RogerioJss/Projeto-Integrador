import styled from "styled-components"
import Button from "../Button"
import ContainerConteudo from "../ContainerConteudo"
import ModalAddTerreiro from "../ModalAddTerreiro"
import { useState } from "react"
import ModalControle from "../ModalControleEstacoes"
import CoresTemaEscuro from "../../Colors/cores"

const ConteudoEstilizado = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    border: 2px solid ${CoresTemaEscuro.corBackgroundBotoes};
    border-radius: 10px;
    width: 50%;
`

const Conteudo = () => {
    const [modalOpen, setModalClose] = useState(false);

    function openModal (){
        setModalClose(true);
    }
    
    function closeModal(){
        setModalClose(false);
    }

    const [modalOpen1, setModalClose1] = useState(false);

    function openModal1(){
        setModalClose1(true);
    }

    function closeModal1(){
        setModalClose1(false);
    }
    return(
    <ConteudoEstilizado>
        <ContainerConteudo/>
        <Button className="button" id="button1" onClick={openModal}>Adicionar Terreiro</Button>
        <ModalAddTerreiro stateOpen={modalOpen} stateClose={closeModal} closeModal={closeModal} idExterno="modalTerreiroExterno" idConteudo="modalTerreiroConteudo" fecharComCliqueDeFora={false}/>
        <Button className="button" id="button2" onClick={openModal1}>Controlar Estações</Button>
        <ModalControle stateOpen1={modalOpen1} stateClose1={closeModal1} closeModal1={closeModal1} idExterno1="modalControleExterno" idConteudo1="modalControleConteudo" fecharComCliqueDeFora1={false} status1="LIGAR"/>
    </ConteudoEstilizado>
    )
}


export default Conteudo