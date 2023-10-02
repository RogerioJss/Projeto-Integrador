import { useState } from "react"
import Modal from "../../Modal"
import styled from "styled-components";
import SVGS from "../../../SVGS/svgs";



const ButtonOpenModal = styled.button`
    border-radius: 50%;
    text-align: center;
    height: 80px;
    width: 80px;
    justify-content: center;
    align-items: center;
    border: 2px solid ;
`
const DivEx = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

const Pefil = () => {
    const [modalOpen, setModalClose] = useState(false);

    function openModal (){
        setModalClose(true);
        const elemento = document.getElementById("meuElemento")
        const modalControle = document.getElementById("modalControleGeral")
        elemento.classList.add("modalOpacity")
        modalControle.classList.add("modalOpacity")
    }
    
    function closeModal(){
        setModalClose(false);
        const elemento = document.getElementById("meuElemento")
        const modalControle = document.getElementById("modalControleGeral")
        elemento.classList.remove("modalOpacity")
        modalControle.classList.remove("modalOpacity")
    }

    return(
    <DivEx>
        <ButtonOpenModal onClick={openModal} >Open Modal</ButtonOpenModal>
        <Modal stateOpen={modalOpen} stateClose={closeModal} idExterno={"conteudoExterno"} idConteudo={"conteudoModal"} closeModal={closeModal} src={SVGS.IconeFecharModal}
         id="fechaModalIcon" fecharComCliqueFora={false}/>
    </DivEx>
    )
}

export default Pefil