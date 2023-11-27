import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border-radius: 10px;
  text-align: center;
  font-size: 1.5rem;
`;
const Option = styled.option``;

const Dropdown = () => {
  const [nomeTerreiro, setNomeTerreiro] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://deploy-robo-coffe.vercel.app/j4mmcU6UuxQEubQJ3Wuwk1HUmeU2/terreno/nome"
      );
      setNomeTerreiro(response.data);
      console.log(nomeTerreiro);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  // Chamada da API no momento da inicialização do componente
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Select>
      <Option  disabled selected>
        Selecione um Terreiro
      </Option>
      {nomeTerreiro &&
        nomeTerreiro.map((terreiro, index) => (
          <Option key={index}>{terreiro.idTerreiro}</Option>
        ))}
    </Select>
  );
};

export default Dropdown;
