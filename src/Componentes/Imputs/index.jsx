import styled from "styled-components";

import CoresTemaEscuro from "../../Colors/cores";

const CaixasTexto = styled.input`
  width: ${(props) => props.width || "30.8125rem"};
  height: 61px;
  text-align: center;
  border-radius: 7px;
  border: 1px solid ${CoresTemaEscuro.corBordaInputs};
  background: ${CoresTemaEscuro.corInputs};
  color: ${CoresTemaEscuro.corTextoBotoes};
  text-align: center;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  min-width: 205px;
`;

const InputText = ({ placeholder, type, id, width, onChange ,value}) => {
  return (
    <CaixasTexto
      type={type}
      placeholder={placeholder}
      id={id}
      width={width}
      onChange={onChange}
      value={value}
    />
  );
};

export default InputText;
