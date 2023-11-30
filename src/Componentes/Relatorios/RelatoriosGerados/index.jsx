import styled from "styled-components";
import SVGS from "../../../SVGS/svgs";
import IconeInput from "../../Imputs/IconeInputs";
import TextosInferiores from "../../Textos/TextosInferiores";
import ButtonMostrarSenha from "../../Login/ButtonMostrarSenha";
import { Link } from "react-router-dom";


const ContainerRelatorios = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.125rem solid black;
  border-radius: 0.625rem;
  background-color: whitesmoke;
  gap: 0.125rem;
  padding: 0.625rem;
`;



const RelatoriosGerados = ({
  data,
  hora,
  relatorioSelecionado,
}) => {
  return (
    <ContainerRelatorios>
      <IconeInput src={SVGS.IconRelatorio} />
     
      <TextosInferiores>
        {data}-{hora}
      </TextosInferiores>
      <Link to={relatorioSelecionado}>
        <ButtonMostrarSenha src={SVGS.IconeAbrirArduino} />
      </Link>
    </ContainerRelatorios>
  );
};

export default RelatoriosGerados;
