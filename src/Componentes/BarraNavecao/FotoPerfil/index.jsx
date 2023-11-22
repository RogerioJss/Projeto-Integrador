import { useEffect, useState } from "react";
import Modal from "../../Modal";
import styled from "styled-components";
import SVGS from "../../../SVGS/svgs";

const ButtonOpenModal = styled.button`
  border-radius: 50%;
  text-align: center;
  height: 80px;
  width: 80px;
  justify-content: center;
  align-items: center;
  border: 2px solid;
`;
const DivEx = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Pefil = () => {
  const [modalOpen, setModalClose] = useState(false);
  const elemento = document.getElementById("meuElemento");
  const relatorio = document.getElementById("relatorios21");

  useEffect(() => {
    if (modalOpen) {
      if (elemento) {
        elemento.classList.add("modalOpacity");
      } else {
        if (elemento) {
          elemento.classList.remove("modalOpacity");
        }
      }
    }
  }, [modalOpen]);
  function openModal() {
    setModalClose(true);
    if (relatorio) {
      relatorio.classList.add("modalOpacity");
    }

    if (elemento) {
      elemento.classList.add("modalOpacity");
    }
  }

  function closeModal() {
    setModalClose(false);
    if (relatorio) {
      relatorio.classList.remove("modalOpacity");
    }

    if (elemento) {
      elemento.classList.remove("modalOpacity");
    }
  }

  return (
    <DivEx>
      <ButtonOpenModal onClick={openModal}>Open Modal</ButtonOpenModal>
      <Modal
        stateOpen={modalOpen}
        stateClose={closeModal}
        idExterno={"conteudoExterno"}
        idConteudo={"conteudoModal"}
        closeModal={closeModal}
        src={SVGS.IconeFecharModal}
        id="fechaModalIcon"
        fecharComCliqueFora={false}
      />
    </DivEx>
  );
};

export default Pefil;
