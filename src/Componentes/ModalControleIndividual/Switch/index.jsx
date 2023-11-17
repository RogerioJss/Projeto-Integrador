import styled, { keyframes } from "styled-components"
import CoresTemaEscuro from "../../../Colors/cores"
import { useState } from "react"


const ContainerSwitchEstilizado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 40%;
    padding: 0 20px;
    min-width: 310px;
    gap: 15px;
    @media (max-width: 320px) {
        gap: 10px;
    }
`
const SwitchEstilizado = styled.div`
    width: 64px;
    margin: 4px auto;
    position: relative;
    

`

const AnimationSwitchIn = keyframes`
    from{
    left: 0%;
  }
  to{
    left: 50%;
  }
`

const AnimationSwitchBack = keyframes`
    from{
    left: 50%;
  }
  to{
    left: 0;
  }
`

const ButtonEstilizado = styled.button`
    width: 32px;
    @media (max-width: 320px) {
        width: 22px;
        height: 22px;
    }
    width: 32px;
    height: 32px;
    border: 0;
    border-radius: 50%;
    position: absolute;
    z-index: 1;
    background-color: ${({isOn}) => (isOn ? 'red' : CoresTemaEscuro.corBolinhaSwitchVerde)};
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    animation: ${({isOn}) => (isOn ? AnimationSwitchIn : AnimationSwitchBack)} 0.3s forwards ;
`   

const SpanEstilizado = styled.span`
    display: block;
    @media (max-width: 320px) {
        width: 44px; 
    }
    width: 64px;
    height: 24px; 
    border: 1px solid var(--stroke-color);
    backdrop-filter: blur(4px);
    border-radius: 9999px;
    background-color: ${CoresTemaEscuro.corBackgroundSwitch};
`

const TituloEstizado = styled.h1`
    font-size: 30px;
    color: ${props => props.color};
    opacity: ${props => props.opacity};
`

const Switch = () => {
    const [isOn, setIsOn] = useState(false)

    const LigarDesligar = () => {
        setIsOn(!isOn)
    }
   
   
    return(
        <ContainerSwitchEstilizado>
            <TituloEstizado color={CoresTemaEscuro.corStatusOn} opacity={isOn ? 0.5 : 1 }  >Ligado</TituloEstizado>   
            <SwitchEstilizado onClick={LigarDesligar} >
                <ButtonEstilizado isOn={isOn} ></ButtonEstilizado>
                <SpanEstilizado></SpanEstilizado>
            </SwitchEstilizado>
            <TituloEstizado color={CoresTemaEscuro.corStatusError} opacity={isOn ? 1 : 0.5} >Desligado</TituloEstizado>
        </ContainerSwitchEstilizado>
    )
}

export default Switch