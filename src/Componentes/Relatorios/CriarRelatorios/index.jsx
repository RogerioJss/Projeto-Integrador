import styled from "styled-components";
import Dropdown from "../DropDown";
import CoresTemaEscuro from "../../../Colors/cores";
import CalendarioPesquisa from "../CalendarioBusca";
import TipoRelatorio from "../TipoRelatorio";
import Button from "../../Button";
import TextosInferiores from "../../Textos/TextosInferiores";
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
    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const CriarRelatorios = () => {
  return (
    <ConteinerGeral>
      <Dropdown />
      <ContainerFiltro>
        <TextosInferiores>De</TextosInferiores>
        <CalendarioPesquisa />
        <TextosInferiores>Até</TextosInferiores>
        <CalendarioPesquisa />
      </ContainerFiltro>

      <ConteinerTipoRelatorio>
        <TipoRelatorio>PDF</TipoRelatorio>
        <TipoRelatorio>CSV</TipoRelatorio>
      </ConteinerTipoRelatorio>
      <Button width={100}>Criar Relatorio</Button>
    </ConteinerGeral>
  );
};

export default CriarRelatorios;
