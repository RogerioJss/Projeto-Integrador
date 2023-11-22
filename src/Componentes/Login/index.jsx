import styled from "styled-components";
import CoresTemaEscuro from "../../Colors/cores"
import InputText from "../Imputs";
import IconeInput from "../Imputs/IconeInputs";
import SVGS from "../../SVGS/svgs";
import Links from "../Links";
import ButtonEntrar from "./ButtonEntrar";
import ButtonMostrarSenha from "./ButtonMostrarSenha";
import  { useState } from 'react';


const DivLogin = styled.div`
    background-color: #F4F4F4;
   width: 100%;
    @media (min-width: 1000px) {
        width: 50%;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.125rem;
    margin:auto;
    border: 2px solid ${CoresTemaEscuro.corBackgroundBotoes};
    border-radius: 0.625rem;
    padding: 0 0 0.9375rem;
   
    button{
        transition: transform 0.3s ease;
    }

    button:hover{
        transform: scale(1.1);
        color: ${CoresTemaEscuro.corHover};
    }

    a{
        color: #04764E;
        transition: transform 0.3s ease;
    }

    a:hover{
        transform: scale(1.1);
    }

    img{
        width: 100%;
        height: 233px;
        object-fit: contain;
    }

    
   
`
const DivEstilizada = styled.div`
   position: relative;
`

const ContainerLogo = styled.div`
    background-color: ${CoresTemaEscuro.corBackgroundBotoes};
    width: 100%;
    text-align: center;
    height: 50vh;
`   



const Login = () => {
    const [senhaVisivel, setSenhaVisivel] = useState(false);

    const handleMostrarSenha = () => {
        setSenhaVisivel(!senhaVisivel);
    };
    return(
    <DivLogin>
        <ContainerLogo>
             <img src="public/assets/logo.png" alt="" />
        </ContainerLogo>
       
        <DivEstilizada>
            <InputText placeholder={"Digite seu email"} type={"email"} width={100}/>
            <IconeInput src={SVGS.UserIcon} id={"userIcon"} className={"icones"} /> 
        </DivEstilizada>
        <DivEstilizada>
            <InputText placeholder={"Digite sua senha "}  type={senhaVisivel ? "text" : "password"} id={"senha"} width={100}/>
            <IconeInput src={SVGS.SenhaIcon} id={"senhaIcon"} className={"icones"}/> 
            <ButtonMostrarSenha onClick={handleMostrarSenha} src={senhaVisivel ? SVGS.MostrarSenhaVisivel : SVGS.MostrarSenhaIcon} id={"mostrarSenha"} className={"icones"}/>
        </DivEstilizada>
       
        <Links href={"#"} target={"_blank"}>
                Esqueceu sua senha?
        </Links>
        <ButtonEntrar  >
            ENTRAR
        </ButtonEntrar>
    </DivLogin>

)
}


export default Login