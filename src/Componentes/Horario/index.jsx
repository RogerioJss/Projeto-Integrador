import styled from "styled-components";
import SVGS from "../../SVGS/svgs";
import HorarioAtual from "./HoraAtual";
import Status from "../Status";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

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
        <motion.img src={SVGS.Linha} style={{ width: "100%" }} id="linha" />
        <motion.img
          src={SVGS.Sol}
          id="sol"
          style={{
            position: "absolute",
            left: "-25px",
            bottom: "-25px",
          }}

        />
      </ContainerLinhaSol>
      <ContainerSH>
        <HorarioAtual />
        <Status status="ok">Status:</Status>
      </ContainerSH>
    </DivEstilizada>
  );
};

export default Horario;
