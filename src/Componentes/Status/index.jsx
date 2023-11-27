import styled from "styled-components";
import CoresTemaEscuro from "../../Colors/cores";

const ContainerStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const H1Estilizado = styled.div`
  font-size: 30px;
  color: ${CoresTemaEscuro.corTextos};
`;

const DivStatus = styled.div`
  background-color: ${(props) => props.color};
  font-size: 30px;
  color: white;
  border-radius: 0.625rem;
  @media (min-width: 500px) {
    min-width: 60%;
  }
  height: ${(props) => props.height || "84px"};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyleStatus = (status) => {
  switch (status) {
    case "ok":
      return {
        text: "ON",
        color: CoresTemaEscuro.corStatusOn,
      };
    case "off":
      return {
        text: "OFF",
        color: CoresTemaEscuro.corStatusOff,
      };
    case "alert":
      return {
        text: "ALERT",
        color: CoresTemaEscuro.corStatusAlert,
      };
    case "error":
      return {
        text: "ERROR",
        color: CoresTemaEscuro.corStatusError,
      };
    default:
      return {
        text: "Unknown",
        color: "gray",
      };
  }
};

const Status = ({ status, children, height }) => {
  const { text, color } = StyleStatus(status);
  return (
    <ContainerStatus>
      <H1Estilizado>{children} </H1Estilizado>
      <DivStatus height={height} color={color}>
        {text}
      </DivStatus>
    </ContainerStatus>
  );
};

export default Status;
