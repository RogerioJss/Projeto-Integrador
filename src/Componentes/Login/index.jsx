import styled from "styled-components";
import CoresTemaEscuro from "/src/colors/cores.js"
import InputText from "../Imputs";
import IconeInput from "../Imputs/IconeInputs";
import SVGS from "../../SVGS/svgs";
import Links from "../Links";
import ButtonEntrar from "./ButtonEntrar";
import ButtonMostrarSenha from "./ButtonMostrarSenha";
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

const DivLogin = styled.div`
    background-color: #F4F4F4;
    width: 55vw;
    height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 33px;
    margin: auto;
    border: 2px solid ${CoresTemaEscuro.corBackgroundBotoes};
    border-radius: 10px;
    padding: 0 0 15px;
   
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
        width: 277px;
        height: 233px;
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
            <InputText placeholder={"Digite seu email"} type={"email"} />
            <IconeInput src={SVGS.UserIcon} id={"userIcon"} className={"icones"} /> 
        </DivEstilizada>
        <DivEstilizada>
            <InputText placeholder={"Digite sua senha "}  type={senhaVisivel ? "text" : "password"} id={"senha"}/>
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