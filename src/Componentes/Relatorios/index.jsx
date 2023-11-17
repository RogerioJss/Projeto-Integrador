import styled from "styled-components";
import Header from "../BarraNavecao";
import CriarRelatorios from "./CriarRelatorios";
import PesquisarRelatorios from "./PesquisarRelatorios";

const ContainerConteudo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.625rem;
  @media (min-width: 768px) {
        flex-direction: row;
    }
  
`;

const Relatorios = () => {
  return (
    <div id="relatorios21" className="">
      <Header />
      <ContainerConteudo>
        <PesquisarRelatorios />
        <CriarRelatorios />
      </ContainerConteudo>
    </div>
  );
};

export default Relatorios;
