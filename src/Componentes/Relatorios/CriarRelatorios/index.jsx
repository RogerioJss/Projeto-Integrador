import styled from "styled-components";
import Dropdown from "../DropDown";
import CoresTemaEscuro from "../../../Colors/cores";
import TipoRelatorio from "../TipoRelatorio";
import Button from "../../Button";
import TextosInferiores from "../../Textos/TextosInferiores";
import DropdownDataRelatorio from "../DropDownDataRelatorio";
import { useState } from "react";
import axios from "axios";
import { useAppContext } from "../../../Contexts/contextHome";

const ConteinerGeral = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 0.125rem solid ${CoresTemaEscuro.corBackgroundBotoes};
  border-radius: 0.9375rem;
  padding: 2rem;
  gap: 15px;
  @media (min-width: 768px) {
    width: 40%;
    margin: 0 0.9375rem;
  }

  gap: 2rem;
  flex-wrap: wrap;
`;

const ConteinerTipoRelatorio = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
`;

const ContainerFiltro = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  flex-direction: column;
`;

const CriarRelatorios = () => {
  const [terreiro, setTerreiro] = useState("null");
  const { atualizarRelatoriosCriados } = useAppContext();

  function setarTerreiro(terreiroNome) {
    setTerreiro(terreiroNome);
  }

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
    const mes = String(agora.getMonth() + 1).padStart(2, "0"); // Mês começa do zero
    const ano = agora.getFullYear();

    const dataHoraFormatada = `${dia}/${mes}/${ano}`;

    return dataHoraFormatada;
  }

  const dataAtual = obterDataFormatada();
  const horaAtual = obterHoraFormatada();

  async function criarRelatorio() {
    try {
      await axios.post(
        "https://deploy-robo-coffe.vercel.app/j4mmcU6UuxQEubQJ3Wuwk1HUmeU2/relatorios",
        {
          criador: "Nickolas",
          data: dataAtual,
          hora: horaAtual,
          funcionamento: "1 minuto",
          idTerreiro: terreiro,
        }
      );
      atualizarRelatoriosCriados();
    } catch (error) {}
  }

  return (
    <ConteinerGeral>
      <Dropdown terreiroNome={setarTerreiro} />
      <ContainerFiltro>
        <TextosInferiores></TextosInferiores>
        <DropdownDataRelatorio idTerreno={terreiro} />
      </ContainerFiltro>
      {/* <ConteinerTipoRelatorio>
        <TipoRelatorio></TipoRelatorio>
      </ConteinerTipoRelatorio> */}
      <Button width={100} onClick={criarRelatorio}>
        Criar Relatorio
      </Button>
    </ConteinerGeral>
  );
};

export default CriarRelatorios;
