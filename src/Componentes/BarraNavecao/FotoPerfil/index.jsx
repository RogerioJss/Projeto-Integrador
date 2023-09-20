import { useState } from "react"
import Modal from "../../Modal"
import styled from "styled-components";
import SVGS from "../../../SVGS/svgs";


const ButtonOpenModal = styled.button`
   
`
const DivEx = styled.div`
    
`

const Pefil = () => {
    const [modalOpen, setModalClose] = useState(false);

    function openModal (){
        setModalClose(true);
    }
    
    function closeModal(){
        setModalClose(false);
    }

    return(
    <DivEx>
        <ButtonOpenModal onClick={openModal}>Open Modal</ButtonOpenModal>
        <Modal stateOpen={modalOpen} stateClose={closeModal} idExterno={"conteudoExterno"} idConteudo={"conteudoModal"} closeModal={closeModal} src={SVGS.IconeFecharModal}
         id="fechaModalIcon" fecharComCliqueFora={false}/>
    </DivEx>
    )
}

export default Pefil