import styled from "styled-components";
import Button from "../Button";
import ContainerConteudo from "../ContainerConteudo";
import ModalAddTerreiro from "../ModalAddTerreiro";
import { useState } from "react";
import CoresTemaEscuro from "../../Colors/cores";
import InputText from "../Imputs";
import ArduinoStatus from "../ArduinoStatus";
import axios from "axios";
import { useEffect } from "react";

const ContainerGeral = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const ConteudoEstilizado = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.6rem;
  min-width: 0;
  border: 2px solid ${CoresTemaEscuro.corBackgroundBotoes};
  border-radius: 0.625rem;
`;

const ContainerControleGeral = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  width: 100%;
  min-height: 616px;
  position: relative;
  @media (min-width: 768px) {
    width: 40%;
  }
  gap: 1rem;
  padding: 2rem;
  border-radius: 1.25rem;
  border: 0.125rem solid ${CoresTemaEscuro.corBackgroundBotoes};
  #pesquisa{
    position: absolute;
    top: 10px;
    margin-bottom: 1rem !important;
  }
  #ligarTodos{
    position: absolute;
    bottom: 10px;
  }
`;

const ContainerArduinos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 3rem;
  gap: 0.5rem;
`
const StyleBotton = (status1) => {
  switch (status1) {
    case "LIGAR":
      return {
        children: "Ligar Todos",
        borderColor: CoresTemaEscuro.corVerdePositivo,
        color: CoresTemaEscuro.corTextoBotoes,
        background: CoresTemaEscuro.corBackgroundBotoes,
      };
    case "DESLIGAR":
      return {
        children: "Desligar Todos",
        borderColor: CoresTemaEscuro.corVermelhoNegativo,
        color: CoresTemaEscuro.corTextoBotoes,
        background: CoresTemaEscuro.corStatusError,
      };
  }
};

const Conteudo = ({ status1 }) => {
  const { children, borderColor, color, background } = StyleBotton(status1);
  const [modalOpen, setModalClose] = useState(false);
  const [searchArduino, setSearchArduino] = useState("");
  
  function openModal() {
    setModalClose(true);
    const elemento = document.getElementById("meuElemento");
    const modalControleGeral = document.getElementById("modalControleGeral");
    elemento.classList.add("modalOpacity");
    modalControleGeral.classList.add("modalOpacity");
  }

  function closeModal() {
    setModalClose(false);
    const elemento = document.getElementById("meuElemento");
    const modalControleGeral = document.getElementById("modalControleGeral");
    elemento.classList.remove("modalOpacity");
    modalControleGeral.classList.remove("modalOpacity");
  }

  const [arduinos, setArduinos] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://deploy-robo-coffe.vercel.app/j4mmcU6UuxQEubQJ3Wuwk1HUmeU2/terrenos/read/all"
      )
      .then(function (response) {
        const arduinosJson = response.data;
        setArduinos(arduinosJson);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function LigarArduino() {
    fetch("http://192.168.64.181:8080/L");
  }

  return (
    <ContainerGeral>
      <ConteudoEstilizado>
        <ContainerConteudo />
        <Button
          className="button"
          id="button1"
          onClick={openModal}
          heigth="29%"
          minHeight="80px"
          width={100}
        >
          Adicionar Terreiro
        </Button>
        <ModalAddTerreiro
          stateOpen={modalOpen}
          stateClose={closeModal}
          closeModal={closeModal}
          idExterno="modalTerreiroExterno"
          idConteudo="modalTerreiroConteudo"
          fecharComCliqueDeFora={false}
        />
      </ConteudoEstilizado>
      <ContainerControleGeral>
        <InputText
          type="text"
          placeholder="Pesquise o nome do arduino"
          width="90%"
          value={searchArduino}
          onChange={(e) => setSearchArduino(e.target.value)}
          id='pesquisa'
        />
        <ContainerArduinos>
          {arduinos &&
          arduinos
            .filter((arduino) =>
              arduino.idTerreiro
                .toLowerCase()
                .includes(searchArduino.toLowerCase())
            )
            .map((arduino) => (
              <ArduinoStatus
                status={arduino.status}
                key={arduino.idTerreiro}
                nomeArduinoIndividal={arduino.idTerreiro}
                statusArduinoIndividual={arduino.status}
                idMudarStatus={arduino.idTerreiro}
                idParaRelatorio={arduino.idTerreiro}
              >
                {arduino.idTerreiro}
              </ArduinoStatus>
            ))}
        </ContainerArduinos>
        
        <Button
          borderColor={borderColor}
          color={color}
          backgroud={background}
          width="100"
          heigth="10%"
          minHeight="70px"
          onClick={LigarArduino}
          id="ligarTodos"
        >
          {children}
        </Button>
      </ContainerControleGeral>
    </ContainerGeral>
  );
};

export default Conteudo;
