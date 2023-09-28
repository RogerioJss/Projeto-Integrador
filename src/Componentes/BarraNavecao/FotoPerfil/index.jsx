import { useState } from "react"
import Modal from "../../Modal"
import styled from "styled-components";
import SVGS from "../../../SVGS/svgs";



const ButtonOpenModal = styled.button`
    border-radius: 50%;
    text-align: center;
    height: 184px;
    max-width: 210px;
    min-width: 190px;
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
    }
    
    function closeModal(){
        setModalClose(false);
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