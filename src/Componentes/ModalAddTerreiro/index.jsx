import ReactModal from "react-modal";
import styled from "styled-components";
import InputText from "../Imputs";
import Button from "../Button";
import CoresTemaEscuro from "../../Colors/cores";
import axios from "axios";
import { useState } from "react";

ReactModal.setAppElement("#root");

const ModalContainer = styled.div`
  position: relative;
`;
const TituloEstilizado = styled.h1`
  color: ${CoresTemaEscuro.corBackgroundBotoes};
  font-size: 50px;
  text-align: center;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const ParagrafoEstilizado = styled.p`
  color: ${CoresTemaEscuro.corTextoBotoes};
  font-size: 30px;
`;
const ModalAddTerreiro = ({
  stateOpen,
  stateClose,
  closeModal,
  idExterno,
  idConteudo,
  fecharComCliqueDeFora,
}) => {
  const [idTerreiro, setIdTerreiro] = useState("");
  const [ipTerreiro, setIpTerreiro] = useState("");
  function criarTerreiro() {
    axios
      .post(
        "https://deploy-robo-coffe.vercel.app/j4mmcU6UuxQEubQJ3Wuwk1HUmeU2/terrenos/create",
        {
          idTerreiro: idTerreiro,
          ip: ipTerreiro,
        }
      )
      .then((response) => {
        console.log("deu certo porra");
        console.log(idTerreiro);
        console.log(ipTerreiro);
      })
      .catch((error) => {
        console.log("morremo krl", error);
      });
  }

  function hundleBotaoAdicionar() {
    criarTerreiro();
    closeModal();
  }
  return (
    <ModalContainer>
      <ReactModal
        isOpen={stateOpen}
        onRequestClose={stateClose}
        overlayClassName={idExterno}
        className={idConteudo}
        shouldCloseOnOverlayClick={fecharComCliqueDeFora}
      >
        <TituloEstilizado>Add. Terreiros</TituloEstilizado>
        <InputContainer>
          <InputText
            width="50%"
            placeholder="Nome do Terreiro"
            onChange={(e) => setIdTerreiro(e.target.value)}
          />
          <InputText
            width="50%"
            placeholder="Ip do Terreiro"
            onChange={(e) => setIpTerreiro(e.target.value)}
          />
        </InputContainer>
        <Button
          onClick={hundleBotaoAdicionar}
          color={CoresTemaEscuro.corTextoBotoes}
        >
          <ParagrafoEstilizado>Adicionar</ParagrafoEstilizado>
        </Button>
      </ReactModal>
    </ModalContainer>
  );
};

export default ModalAddTerreiro;
