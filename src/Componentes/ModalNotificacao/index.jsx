import ReactModal from "react-modal"
import Notificacao from "../Notificação"
import ItemNavegacao from "../BarraNavecao/ItemNavegacao/index.jsx"
import SVGS from "../../SVGS/svgs"
import styled from "styled-components"


const ContainerNotificacao = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 15px;
    border-radius: 15px;
    border: 2px solid black;
    max-height: 350px;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 0.5em; /* Largura personalizada da barra de rolagem */
    }
`

const TextoData =  styled.h3`

`

const ModalNotificacao =  ({stateOpen, stateClose, closeModal, idConteudo,idExterno}) => {
    return(
        <ReactModal isOpen={stateOpen}
                    onRequestClose={stateClose}
                    className={idConteudo}
                    overlayClassName={idExterno}
                    >
                    <ItemNavegacao src={SVGS.IconNotificacaoAtivado} onClick={closeModal}/>
                    <ContainerNotificacao>
                        <TextoData>03/10/2023</TextoData>
                        <Notificacao text="O arduino 1A esta em estado de..." chindren="1A" data="10:30 , 03/10/2023"/>
                        <Notificacao text="O arduino 5A esta em estado de..." chindren="5A" data="00:30 , 03/10/2023"/>
                        <Notificacao text="O arduino 7A esta em estado de..." chindren="7A" data="15:30 , 03/10/2023"/>
                        <Notificacao text="O arduino 7A esta em estado de..." chindren="7A" data="15:30 , 03/10/2023"/>
                        <Notificacao text="O arduino 7A esta em estado de..." chindren="7A" data="15:30 , 03/10/2023"/>
                        <Notificacao text="O arduino 7A esta em estado de..." chindren="7A" data="15:30 , 03/10/2023"/>
                        <Notificacao text="O arduino 7A esta em estado de..." chindren="7A" data="15:30 , 03/10/2023"/>
                        <Notificacao text="O arduino 7A esta em estado de..." chindren="7A" data="15:30 , 03/10/2023"/>
                    </ContainerNotificacao>
                    <ContainerNotificacao>
                        <TextoData>05/10/2023</TextoData>
                        <Notificacao text="O arduino 1A esta em estado de..." chindren="1A" data="10:30 , 03/10/2023"/>
                        <Notificacao text="O arduino 5A esta em estado de..." chindren="5A" data="00:30 , 03/10/2023"/>
                        <Notificacao text="O arduino 7A esta em estado de..." chindren="7A" data="15:30 , 03/10/2023"/>
                        <Notificacao text="O arduino 7A esta em estado de..." chindren="7A" data="15:30 , 03/10/2023"/>
                        <Notificacao text="O arduino 7A esta em estado de..." chindren="7A" data="15:30 , 03/10/2023"/>
                        <Notificacao text="O arduino 7A esta em estado de..." chindren="7A" data="15:30 , 03/10/2023"/>
                    </ContainerNotificacao>
                    
        </ReactModal>
    )
}

export default ModalNotificacao