import styled from "styled-components";
import CoresTemaEscuro from "../../Colors/cores";

const ButtonEstilizado = styled.button`
  background-color: ${(props) =>
    props.backgroud || CoresTemaEscuro.corBackgroundBotoes};
  width: ${(props) => props.width || "40%"};
  height: ${(props) => props.heigth};
  max-width: 400px;
  min-height: ${(props) => props.minheight};
  max-height: 80px;
  color: ${(props) => props.color || CoresTemaEscuro.corTextoBotoes};
  font-size: 30px;
  border-radius: 20px;
  border: 2px solid ${(props) => props.bordercolor};
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
  padding: 1rem;
`;

const Button = ({
  children,
  onClick,
  className,
  id,
  borderColor,
  color,
  backgroud,
  width,
  heigth,
  minHeight,
  onChange,
}) => {
  return (
    <ButtonEstilizado
      onClick={onClick}
      className={className}
      id={id}
      bordercolor={borderColor}
      color={color}
      backgroud={backgroud}
      width={width}
      heigth={heigth}
      minheight={minHeight}
      onChange={onChange}
    >
      {children}
    </ButtonEstilizado>
  );
};

export default Button;
