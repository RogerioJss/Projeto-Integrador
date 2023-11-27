import styled, { css } from "styled-components";
import CalendarioPesquisa from "../CalendarioBusca";
import RelatoriosGerados from "../RelatoriosGerados";
import CoresTemaEscuro from "../../../Colors/cores";
import TextosInferiores from "../../Textos/TextosInferiores";
import ralatoriosJson from "../../../jsons/relatorios.json";
import { useState } from "react";

const PesquisaContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (min-width: 768px) {
    width: 40%;
    margin: 0 0.9375rem;
  }
  border: 0.125rem solid ${CoresTemaEscuro.corBackgroundBotoes};
  border-radius: 0.9375rem;
  padding: 0.625rem;
  gap: 15px;
`;
const ContainerDataPicker = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const TextoRelatorioNãoEncontrado = styled.h3``;


const RelatoriosGeradosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: ${({ scrollHabilit }) => (scrollHabilit ? "auto" : "hidden")};
  max-height: ${({ scrollHabilit }) =>
    scrollHabilit ? "calc(4 * 90px)" : "none"};
  &::-webkit-scrollbar {
    width: 0.5em; /* Largura personalizada da barra de rolagem */
  }
`;

const PesquisarRelatorios = () => {
  const [dataSelecionada, setDataSelecionada] = useState(null);

  const hundleDataSelecionada = (novaData) => {
    setDataSelecionada(novaData);
  };

  const relatoriosFiltrados = ralatoriosJson.filter(
    (relatorio) =>
      !dataSelecionada ||
      relatorio.data === dataSelecionada.format("DD/MM/YYYY")
  );

  return (
    <PesquisaContainer>
      <ContainerDataPicker>
        <TextosInferiores>De</TextosInferiores>
        <CalendarioPesquisa dataSelect={hundleDataSelecionada} />
      </ContainerDataPicker>
      <RelatoriosGeradosContainer
        scrollHabilit={relatoriosFiltrados.length > 4}
      >
        {relatoriosFiltrados.length === 0 ? (
          <TextoRelatorioNãoEncontrado>
            Nenhum Relatorio encontrado neste dia!!
          </TextoRelatorioNãoEncontrado>
        ) : (
          relatoriosFiltrados.map((relatorio) => (
            <RelatoriosGerados
              key={relatorio.id}
              data={relatorio.data}
              hora={relatorio.hora}
            />
          ))
        )}
      </RelatoriosGeradosContainer>
    </PesquisaContainer>
  );
};

export default PesquisarRelatorios;
