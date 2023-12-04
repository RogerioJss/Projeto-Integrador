import ReactModal from "react-modal";
import Notificacao from "../Notificação";
import ItemNavegacao from "../BarraNavecao/ItemNavegacao/index.jsx";
import SVGS from "../../SVGS/svgs";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useAppContext } from "../../Contexts/contextHome.jsx";

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
`;

const TextoData = styled.h3``;

const ModalNotificacao = ({
  stateOpen,
  stateClose,
  closeModal,
  idConteudo,
  idExterno,
}) => {
  const [notificacoes, setNotificacoes] = useState(null);
  const {isSwitchOn} = useAppContext()

// async function FetchNotifications () {
//     try{
//         await  
        
//     }catch(error){
//         console.log('erro ao obter notificacoes', error)
//     }
// }

  useEffect(() => {
    axios.get(
        "https://deploy-robo-coffe.vercel.app/j4mmcU6UuxQEubQJ3Wuwk1HUmeU2/notifications/read/all"
      )
      .then(function (response) {
        const notificaçõesJson = response.data;
        setNotificacoes(notificaçõesJson);
        
      })
      .catch((error) => {
        console.log("erro ao obter notificações", error);
      });
  },[isSwitchOn]);
  return (
    <ReactModal
      isOpen={stateOpen}
      onRequestClose={stateClose}
      className={idConteudo}
      overlayClassName={idExterno}
    >
      <ItemNavegacao src={SVGS.IconNotificacaoAtivado} onClick={closeModal} />
      <ContainerNotificacao>
        <TextoData>30/11/2023</TextoData>
        {notificacoes && notificacoes.map((notificacao,index) => (
          <Notificacao
            key={index}
            text={notificacao.title}
            chindren={notificacao.idTerreno}
            data={`${notificacao.hora} , ${notificacao.data}`}
          />
          ))}
      </ContainerNotificacao>
    </ReactModal>
  );
};

export default ModalNotificacao;
