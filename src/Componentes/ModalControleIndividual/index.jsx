import ReactModal from "react-modal";
import Button from "../Button";
import CoresTemaEscuro from "../../Colors/cores";
import Status from "../Status";
import Switch from "./Switch";
import styled from "styled-components";
import ModalConfirmarApagar from "../ModalConfirmarApagar";
import { useState } from "react";
import axios from "axios";

ReactModal.setAppElement("#root");

const TituloEstilizado = styled.h1`
  color: ${CoresTemaEscuro.corBackgroundBotoes};
  font-size: 40px;
`;

const ContainerBotoes = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6px;
`;

const ModalControleIndividual = ({
  stateOpen,
  stateClose,
  idExterno,
  idConteudo,
  fecharComCliqueDeFora,
  estado,
  nomeArduinoIndividual,
  statusArduinoIndividual,
  idMudarStatus,
  idParaRelatorio
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  function openModal12() {
    setModalOpen(true);
    const controleIndividual = document.getElementById("controleIndividual");
    controleIndividual.classList.add("modalOpacity");
  }

  function closeModal12() {
    setModalOpen(false);
    const controleIndividual = document.getElementById("controleIndividual");
    controleIndividual.classList.remove("modalOpacity");
  }

  function fecharDuasModais() {
    const elemento = document.getElementById("meuElemento");
    elemento.classList.remove("modalOpacity");
    setModalOpen(false);
    estado(false);
  }
  
  function obterHoraFormatada() {
    const agora = new Date()
    const horas = String(agora.getHours()).padStart(2, "0");
    const minutos = String(agora.getMinutes()).padStart(2, "0");

    const horaFormatada = `${horas}:${minutos}`

    return horaFormatada
  }

  function obterDataFormatada() {
    const agora = new Date();

    const dia = String(agora.getDate()).padStart(2, "0");
    const mes = String(agora.getMonth() + 1).padStart(2, "0"); // Mês começa do zero
    const ano = agora.getFullYear();

    const dataHoraFormatada = `${dia}/${mes}/${ano}`;

    return dataHoraFormatada;
  }

  const dataAtual = obterDataFormatada();
  const horaAtual = obterHoraFormatada();

  function gerarRelatorio() {
    axios
      .post(
        `https://deploy-robo-coffe.vercel.app/j4mmcU6UuxQEubQJ3Wuwk1HUmeU2/create/terreno/${idParaRelatorio}/relatorio`,
        {
          criador: "Nickolas",
          data: dataAtual ,
          hora: horaAtual,
          funcionamento: "1 minuto",
          idTerreiro:  idParaRelatorio ,
        }
      )
      .then((reponse) => {
        console.log("deu certo");
      })
      .catch((error) => {
        console.log("erro ao gerar relatorio no banco", error);
      });
  }
  return (
    <ReactModal
      isOpen={stateOpen}
      onRequestClose={stateClose}
      overlayClassName={idExterno}
      className={idConteudo}
      shouldCloseOnEsc={fecharComCliqueDeFora}
      id="controleIndividual"
      estado={estado}
    >
      <TituloEstilizado>{nomeArduinoIndividual}</TituloEstilizado>
      <Status status={statusArduinoIndividual}>Status</Status>
      <Switch idMudarStatus={idMudarStatus} />
      <ContainerBotoes>
        <Button width={100} onClick={gerarRelatorio}>Oeste</Button>
        <Button width={100} onClick={gerarRelatorio}>Leste</Button>
        <Button width={100} onClick={gerarRelatorio}>Intermediaria</Button>
      </ContainerBotoes>

      <Button
        onClick={openModal12}
        borderColor={CoresTemaEscuro.corVermelhoNegativo}
        color={CoresTemaEscuro.corTextoBotoes}
        backgroud={CoresTemaEscuro.corStatusError}
      >
        Apagar
      </Button>
      <ModalConfirmarApagar
        stateOpen1={modalOpen}
        stateClose1={closeModal12}
        closeModal1={closeModal12}
        fecharDuasModais={fecharDuasModais}
        idExterno1="modalConfirmarApagar"
        idConteudo1="modalConfirmarApagarConteudo"
        fecharComCliqueDeFora1={false}
        arduinoDeletado={idParaRelatorio}
      />
    </ReactModal>
  );
};

export default ModalControleIndividual;
