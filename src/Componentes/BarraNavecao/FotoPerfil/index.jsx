import { useEffect, useState } from "react";
import Modal from "../../Modal";
import styled from "styled-components";
import SVGS from "../../../SVGS/svgs";
import { useAppContext } from "../../../Contexts/contextHome";

const ButtonOpenModal = styled.button`
  border-radius: 50%;
  height: 80px;
  width: 80px;
  border: 2px solid;
`;
const DivEx = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ImagemEstilizada = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const Pefil = () => {
  const [modalOpen, setModalClose] = useState(false);
  const elemento = document.getElementById("meuElemento");
  const relatorio = document.getElementById("relatorios21");
  const { imgUrl } = useAppContext();

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
    console.log(imgUrl);
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
      <ButtonOpenModal onClick={openModal}>
        {imgUrl !== "" ? (
          <ImagemEstilizada src={imgUrl} />
        ) : (
          "Clique para abrir o perfil"
        )}
      </ButtonOpenModal>
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
