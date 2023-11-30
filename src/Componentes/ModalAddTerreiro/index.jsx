import ReactModal from "react-modal";
import styled, { keyframes } from "styled-components";
import InputText from "../Imputs";
import Button from "../Button";
import CoresTemaEscuro from "../../Colors/cores";
import axios from "axios";
import { useState } from "react";
import { useAppContext } from "../../Contexts/contextHome";
import SpinnerLoading from "../SpinnerLoading";

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
  const [loading, setLoading] = useState(false);
  const { toggleSwitch } = useAppContext();

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
    const mes = String(agora.getMonth() + 1).padStart(2, "0");
    const ano = agora.getFullYear();

    const dataHoraFormatada = `${dia}/${mes}/${ano}`;

    return dataHoraFormatada;
  }

  const dataAtual = obterDataFormatada();
  const horaAtual = obterHoraFormatada();

  async function criarTerreiro() {
    setLoading(true);
    try {
      await axios
        .post(
          `https://deploy-robo-coffe.vercel.app/j4mmcU6UuxQEubQJ3Wuwk1HUmeU2/terrenos/create`,
          {
            idTerreiro: idTerreiro.toLocaleUpperCase(),
            ip: ipTerreiro,
            data: dataAtual,
            hora: horaAtual,
            title: 'Terreiro Criado'
          }
        )
        .then(() => {})
        .catch((error) => {});

      toggleSwitch();
      closeModal();
    } catch (error) {
      console.log("erro ao adicionar arduino atualizado", error);
    } finally {
      setLoading(false);
    }
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
          {loading && (
            <SpinnerLoading borderCor={CoresTemaEscuro.corBackgroundBotoes} />
          )}
        </InputContainer>
        <Button onClick={criarTerreiro} color={CoresTemaEscuro.corTextoBotoes}>
          <ParagrafoEstilizado>Adicionar</ParagrafoEstilizado>
        </Button>
      </ReactModal>
    </ModalContainer>
  );
};

export default ModalAddTerreiro;
