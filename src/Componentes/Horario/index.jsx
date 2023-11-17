import styled from "styled-components";
import SVGS from "../../SVGS/svgs";
import HorarioAtual from "./HoraAtual";
import Status from "../Status";

const DivEstilizada = styled.div`
  margin: 48px;
`;
const ContainerLinhaSol = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 50px;
`;

const ContainerSH = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const Horario = () => {
  return (
    <DivEstilizada>
      <ContainerLinhaSol>
        <img src={SVGS.Linha} alt="" id="linha" />
        <img src={SVGS.Sol} alt="" id="sol" />
        <ContainerSH>
          <HorarioAtual />
          <Status status="ON">Status:</Status>
        </ContainerSH>
      </ContainerLinhaSol>
    </DivEstilizada>
  );
};

export default Horario;
