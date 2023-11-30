import styled, { css, keyframes } from "styled-components";
import CoresTemaEscuro from "../../Colors/cores";

const spinAnimation = keyframes`
 to{
  transform: rotate(360deg);
 }
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid ${(props) => props.borderCor};
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  animation: ${spinAnimation} 1s linear infinite;
  margin-top: 10px;
`;

const SpinnerLoading = ({borderCor}) => {
    
  return <Spinner borderCor={borderCor} />;
};

export default SpinnerLoading;
