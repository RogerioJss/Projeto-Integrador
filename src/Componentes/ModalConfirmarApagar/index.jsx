import ReactModal from "react-modal";
import Button from "../Button";
import CoresTemaEscuro from "../../Colors/cores";
import TextosSuperiores from "../Textos";
import TextosInferiores from "../Textos/TextosInferiores";
import styled from "styled-components";
import axios from "axios";
import { useAppContext } from "../../Contexts/contextHome";
import { useState } from "react";
import SpinnerLoading from "../SpinnerLoading";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const ModalConfirmarApagar = ({
  stateOpen1,
  stateClose1,
  closeModal1,
  fecharDuasModais,
  idExterno1,
  idConteudo1,
  fecharComCliqueDeFora1,
  arduinoDeletado,
}) => {
  const { toggleSwitch } = useAppContext();
  const [loading, setLoading] = useState(false);
  function obterHoraFormatada() {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, "0");
    const minutos = String(agora.getMinutes()).padStart(2, "0");

    const horaFormatada = `${horas}:${minutos}`;

    return horaFormatada;
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
  async function apagarArduino() {
    setLoading(true);
    try {
      await axios.delete(
        `https://deploy-robo-coffe.vercel.app/j4mmcU6UuxQEubQJ3Wuwk1HUmeU2/terrenos/delete/${arduinoDeletado}?data=${dataAtual}&hora=${horaAtual}&title=Terreno%20Deletado`
      );
    } catch (erro) {
      console.log("erro", erro);
    } finally {
      setLoading(false);
      toggleSwitch();
      fecharDuasModais();
    }
  }
  function hundleCliqueBotaoSim() {
    apagarArduino();
  }
  return (
    <ReactModal
      isOpen={stateOpen1}
      onRequestClose={stateClose1}
      overlayClassName={idExterno1}
      className={idConteudo1}
      shouldCloseOnOverlayClick={fecharComCliqueDeFora1}
      arduinoDeletado={arduinoDeletado}
    >
      <TextosSuperiores>Deseja mesmo apagar?</TextosSuperiores>
      <TextosInferiores>O Terreno será retirado do sistema.</TextosInferiores>
      <ButtonContainer>
        <Button onClick={hundleCliqueBotaoSim}>Sim</Button>
        <Button
          onClick={closeModal1}
          backgroud={CoresTemaEscuro.corStatusError}
        >
          Não
        </Button>
      </ButtonContainer>
      {loading && <SpinnerLoading borderCor={"red"} />}
    </ReactModal>
  );
};

export default ModalConfirmarApagar;
