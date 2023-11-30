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

const DropdownDataRelatorio = ({idTerreno}) => {
  const [dataRelatorio, setDataRelatorio] = useState(null);
  const [selectData, setSelectData] = useState(null)
   const fetchData = async () => {
     try {
       const response = await axios.get(
         `https://deploy-robo-coffe.vercel.app/j4mmcU6UuxQEubQJ3Wuwk1HUmeU2/terreno/${idTerreno}/relatorio/data`
       );
       setDataRelatorio(response.data);
     } catch (error) {
       console.error("Erro ao buscar dados:", error);
     }
   };

  
   useEffect(() => {
     fetchData();
   }, [idTerreno]);

  const hundleSelectData = (event) => {
    const selectedValue = event.target.value
    setSelectData(selectedValue)
  }

  
  return (
    <Select onChange={hundleSelectData} >
      <Option  disabled selected>
        Selecione uma data para gerar o relatorio
      </Option>
      {dataRelatorio &&
        dataRelatorio.map((data, index) => (
          <Option key={index}>{`${data.data}-${data.hora}`}</Option>
        ))}
    </Select>
  );
};

export default DropdownDataRelatorio;
