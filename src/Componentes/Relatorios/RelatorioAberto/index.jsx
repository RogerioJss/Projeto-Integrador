import { useParams, useNavigate } from "react-router";
import styled from "styled-components";
import CoresTemaEscuro from "../../../Colors/cores";
import Button from "../../Button";
import { useEffect, useState } from "react";
import axios from "axios";
import CriarPDF from "../FuncaoPDF";
import CriarCSV from "../FuncaoCSV";

const ContainerAplicacao = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.125rem solid ${CoresTemaEscuro.corBackgroundBotoes};
  align-items: center;
  width: 100%;
  @media (min-width: 700px) {
    width: 40%;
  }
  margin: auto;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin-top: 8rem;
  gap: 1.5625rem;
`;
const ContainerRelatorioAmostra = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  border-radius: 0.5rem;
  gap: 1.5rem;
  width: 80%;
`;

const ContainerInformações = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TextosGrifados = styled.p`
  font-weight: 700;
  font-size: 1.25rem;
`;

const ContainerButtons = styled.div`
  padding: 1.125rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.625rem;
`;
const RelatorioAberto = () => {
  const [relatorios, setRelatorios] = useState(null);

  function gerarDowloadPDF() {
    CriarPDF({
      criadorPDF: relatorio.criador,
      dataRelatorioPDF: relatorio.data,
      horaRelatorioPDF: relatorio.hora,
      tempoFuncionamentoPDF: relatorio.funcionamento,
    });
  }
  useEffect(() => {
    axios
      .get(
        "https://deploy-robo-coffe.vercel.app/j4mmcU6UuxQEubQJ3Wuwk1HUmeU2/relatorios/read/all"
      )
      .then(function (response) {
        const relatoriosJson = response.data;
        setRelatorios(relatoriosJson);
      });
  }, []);
  const { id } = useParams();
  const navigate = useNavigate();

  const relatorio = relatorios
    ? relatorios.find((relatorio) => relatorio.idTerreiro === id)
    : null;

  if (!relatorio) {
    return <div>Relatorio não encontrado</div>;
  }

  function voltarParaRelatorios() {
    navigate("/relatorios");
  }

  return (
    <ContainerAplicacao>
      <h1>Dados do Relatório</h1>
      <ContainerRelatorioAmostra>
        <ContainerInformações>
          <TextosGrifados>Criador:</TextosGrifados>
          <TextosGrifados>Data:</TextosGrifados>
          <TextosGrifados>Hora:</TextosGrifados>
          <TextosGrifados>Funcionamento:</TextosGrifados>
        </ContainerInformações>
        <ContainerInformações>
          <p> {relatorio.criador}</p>
          <p>{relatorio.data}</p>
          <p> {relatorio.hora}</p>
          <p> {relatorio.funcionamento}</p>
        </ContainerInformações>
      </ContainerRelatorioAmostra>
      <ContainerButtons>
        <Button width={100} onClick={gerarDowloadPDF}>
          Baixar Relatorio PDF
        </Button>
        <Button width={100}>
          <CriarCSV
            criadorCSV={relatorio.criador}
            dataCriacaoCSV={relatorio.data}
            horaCriacao={relatorio.hora}
            tempoFuncionamentoCSV={relatorio.funcionamento}
          />
        </Button>
        <Button width={100} onClick={voltarParaRelatorios}>
          Voltar
        </Button>
      </ContainerButtons>
    </ContainerAplicacao>
  );
};

export default RelatorioAberto;
