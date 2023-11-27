import styled from "styled-components";
import { Dados } from "../../UserData/user";
import CoresTemaEscuro from "../../../Colors/cores";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const CoitainerGeral = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  border: 2px solid ${CoresTemaEscuro.corBackgroundBotoes};
  padding: 20px;

  h2 {
    color: ${CoresTemaEscuro.corBackgroundBotoes};
  }
`;
const CoitainerNome = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const CoitainerEmpresa = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const CoitainerTerreiros = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const CoitainerCNPJ = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const DadosComponente = () => {
  const [dadosUsuario, setDadosUsuario] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://deploy-robo-coffe.vercel.app/read/j4mmcU6UuxQEubQJ3Wuwk1HUmeU2"
      );
      setDadosUsuario(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  // Chamada da API no momento da inicialização do componente
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {dadosUsuario && (
        <CoitainerGeral>
          <CoitainerNome>
            <h2>Nome:</h2>
            <p>{dadosUsuario.nome}</p>
          </CoitainerNome>
          <CoitainerEmpresa>
            <h2>Empresa:</h2>
            <p>{dadosUsuario.empresa}</p>
          </CoitainerEmpresa>
          <CoitainerTerreiros>
            <h2>QT de Terreiros:</h2>
            <p>{dadosUsuario.terrenos}</p>
          </CoitainerTerreiros>
          <CoitainerCNPJ>
            <h2>CNPJ:</h2>
            <p>{dadosUsuario.cnpj}</p>
          </CoitainerCNPJ>
        </CoitainerGeral>
      )}
    </>
  );
};

export default DadosComponente;
