import { styled } from "styled-components";
import CoresTemaEscuro from "../../Colors/cores";
import ItemNavegacao from "./ItemNavegacao";
import SVGS from "../../SVGS/svgs";
import { useEffect, useState } from "react";
import Pefil from "./FotoPerfil";
import ModalNotificacao from "../ModalNotificacao";
import { Link, useLocation } from "react-router-dom";

const HeaderEstilizado = styled.header`
  background-color: ${CoresTemaEscuro.corBackgroundBotoes};
  display: flex;
  gap: 0.625rem;
  flex-direction: column;
  @media (min-width: 400px) {
    justify-content: space-between;
    flex-direction: row;
  }
  align-items: center;
  padding: 0.625rem 1.5rem;
  margin-bottom: 0.9375rem;
`;

const ItensContainer = styled.div`
  display: flex;
  gap: 1.3rem;
  @media (max-width: 400px) {
    gap: 1.5rem;
  }
`;

const Header = () => {
  const location = useLocation();
  const pageAtual = location.pathname;
  const [itemNotificacao, setItemNotificacao] = useState(false);
  const [itemHome, setItemHome] = useState(true);
  const [itemRelatorio, setItemRelatorio] = useState(false);
  const [stateOpen2, setStateOpen2] = useState(false);
  const elemento = document.getElementById("meuElemento");
  const relatorio = document.getElementById("relatorios21");
  useEffect(() => {
    if (pageAtual == "/relatorios") {
      setItemHome(false);
      setItemRelatorio(true);
    }
  }, [pageAtual]);

  useEffect(() => {
    if (stateOpen2) {
      // lógica para adicionar classe quando a modal é aberta
      if (relatorio) {
        relatorio.classList.add("modalOpacity");
      }
      if (elemento) {
        elemento.classList.add("modalOpacity");
      }
    } else {
      // lógica para remover classe quando a modal é fechada
      if (relatorio) {
        relatorio.classList.remove("modalOpacity");
      }
      if (elemento) {
        elemento.classList.remove("modalOpacity");
      }
    }
  }, [stateOpen2]);
  const itemAtivar = (item) => {
    switch (item) {
      case "notificacao":
        if (pageAtual == "/home") {
          setItemNotificacao(true);
          setItemHome(false);
          setItemRelatorio(false);
          if (stateOpen2 === false) {
            setItemNotificacao(false);
            setItemHome(true);
          }
        }
        if (pageAtual == "/relatorios") {
          setItemNotificacao(true);
          setItemHome(false);
          setItemRelatorio(false);
          if (stateOpen2 === false) {
            setItemNotificacao(false);
            setItemHome(false);
            setItemRelatorio(true);
          }
        }
        break;
      case "home":
        if (pageAtual == "/home") {
          setItemHome(true);
          setItemNotificacao(false);
          setItemRelatorio(false);
        }
        break;
      case "relatorio":
        if (pageAtual == "/relatorios") {
          setItemHome(false);
          setItemNotificacao(false);
          setItemRelatorio(true);
          console.log(itemRelatorio);
        }
        break;
    }
  };

  const openModal = () => {
    setStateOpen2(!stateOpen2);
  };

  const closeModal = () => {
    setStateOpen2(false);
  };

  const geral = () => {
    itemAtivar("notificacao");
    openModal();
  };

  return (
    <HeaderEstilizado>
      <Pefil />
      <ItensContainer>
        <Link to={"/relatorios"}>
          <ItemNavegacao
            src={
              itemRelatorio
                ? SVGS.IconRelatorioAtivado
                : SVGS.IconRelatorioDesativado
            }
            onClick={() => itemAtivar("relatorio")}
          />
        </Link>

        <Link to={"/home"}>
          <ItemNavegacao
            src={itemHome ? SVGS.IconHomeAtivado : SVGS.IconHomeDesativado}
            onClick={() => itemAtivar("home")}
          />
        </Link>

        <ItemNavegacao
          src={
            itemNotificacao
              ? SVGS.IconNotificacaoAtivado
              : SVGS.IconNotificacaoDesativado
          }
          onClick={() => geral()}
        />
      </ItensContainer>
      <ModalNotificacao
        stateOpen={stateOpen2}
        stateClose={openModal}
        idConteudo="modalNotificacaoConteudo"
        idExterno="modalNotificacaoExterno"
        closeModal={closeModal}
      />
    </HeaderEstilizado>
  );
};

export default Header;
