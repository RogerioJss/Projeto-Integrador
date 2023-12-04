import styled from "styled-components"
import TextosInferiores from "../../Textos/TextosInferiores"
import React, { useState } from 'react';



const ConteinerGeral = styled.div`
    display: flex;
    gap: 10px;
`

const TipoRelatorio = ({children}) => {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  const trocarCheckbox1 = () => {
    setCheckbox1(!checkbox1);
    setCheckbox2(false); // Para desmarcar o segundo checkbox
  };

  const trocarCheckbox2 = () => {
    setCheckbox2(!checkbox2);
    setCheckbox1(false); // Para desmarcar o primeiro checkbox
  };

  return (
    <ConteinerGeral>
    <TextosInferiores>
    <div>
      <label>   
        <input
          type="checkbox"
          checked={checkbox1}
          onChange={trocarCheckbox1}
        />
        PDF
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={checkbox2}
          onChange={trocarCheckbox2}
        />
        CSV
      </label>
    </div>
    </TextosInferiores>
    </ConteinerGeral>
  );
};


export default TipoRelatorio;