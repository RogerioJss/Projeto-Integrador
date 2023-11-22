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
    if (pageAtual == "/Relatorios") {
      setItemHome(false);
      setItemRelatorio(true);
    }
    [pageAtual];
  });
  const itemAtivar = (item) => {
    switch (item) {
      case "notificacao":
        if (pageAtual == "/") {
          setItemNotificacao(true);
          setItemHome(false);
          setItemRelatorio(false);
          if (stateOpen2 === false) {
            setItemNotificacao(false);
            setItemHome(true);
          }
        }
        if (pageAtual == "/Relatorios") {
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
        if (pageAtual == "/") {
          setItemHome(true);
          setItemNotificacao(false);
          setItemRelatorio(false);
        }
        break;
      case "relatorio":
        if (pageAtual == "/Relatorios") {
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
    if (relatorio) {
      relatorio.classList.add("modalOpacity");
    }
    if (elemento) {
      elemento.classList.add("modalOpacity");
    }

  };

  const closeModal = () => {
    setStateOpen2(false);
    if (relatorio) {
      relatorio.classList.remove("modalOpacity");
    }

    if (elemento) {
      elemento.classList.remove("modalOpacity");
    }
    
  };

  const geral = () => {
    itemAtivar("notificacao");
    openModal();
  };

  return (
    <HeaderEstilizado>
      <Pefil />
      <ItensContainer>
        <Link to={"/Relatorios"}>
          <ItemNavegacao
            src={
              itemRelatorio
                ? SVGS.IconRelatorioAtivado
                : SVGS.IconRelatorioDesativado
            }
            onClick={() => itemAtivar("relatorio")}
          />
        </Link>

        <Link to={"/"}>
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
