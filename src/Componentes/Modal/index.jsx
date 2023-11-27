import ReactModal from "react-modal";
import styled from "styled-components";
import ProfilePictureUpload from "./ProfilePicture";
import IconeInput from "../Imputs/IconeInputs";
import { Dados } from "../UserData/user";
import CoresTemaEscuro from "/src/Colors/cores.js";
import DadosComponente from "./Dados";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

ReactModal.setAppElement("#root");

const ButtonEstilizado = styled.button`
  all: initial;
`;

const ContainerTextos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  color: ${CoresTemaEscuro.corTextos};

  h1 {
    color: ${CoresTemaEscuro.corBackgroundBotoes};
  }

  h2 {
    color: ${CoresTemaEscuro.corTitulos};
  }
  p {
    padding: 10px;
    font-size: 20px;
  }
`;

const Modal = ({
  stateOpen,
  stateClose,
  idExterno,
  idConteudo,
  closeModal,
  fecharComCliqueFora,
  src,
  className,
  id,
}) => {
  const [dadosUsuario, setDadosUsuario] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://deploy-robo-coffe.vercel.app/read/j4mmcU6UuxQEubQJ3Wuwk1HUmeU2"
      )
      .then(function (response) {
        const dadosUsuarioJson = response.data;
        setDadosUsuario(dadosUsuarioJson);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
   <>
      {dadosUsuario && (
         <ReactModal
        isOpen={stateOpen}
        onRequestClose={stateClose}
        overlayClassName={idExterno}
        className={idConteudo}
        shouldCloseOnOverlayClick={fecharComCliqueFora}
      >
          <ProfilePictureUpload />
          <ContainerTextos id="textoTelaUsuarios">
            <h1>{dadosUsuario.nome}</h1>
            <DadosComponente />
          </ContainerTextos>
          <ButtonEstilizado onClick={closeModal}>
            <IconeInput src={src} className={className} id={id} />
          </ButtonEstilizado>
        </ReactModal>
      )}
    </>
   
  );
};

export default Modal;
