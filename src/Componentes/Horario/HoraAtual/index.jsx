import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CoresTemaEscuro from '../../../Colors/cores';

const DivEstilizada = styled.div`
    position: relative;
`
const TituloEstilizado = styled.h1`
    color: ${CoresTemaEscuro.corTextos};
`

function HorarioAtual() {
    const [horario, setHorario] = useState('');

    useEffect(() => {
        const atualizarHorario = () => {
            const data = new Date();
            const horaAtual = data.toLocaleTimeString();
            setHorario(horaAtual);
        };

        // Atualize o horário inicialmente e a cada segundo
        atualizarHorario();
        const intervalId = setInterval(atualizarHorario, 1000);

        // Limpe o intervalo quando o componente for desmontado
        return () => clearInterval(intervalId);
    }, []);

    return (
        <DivEstilizada id='horas'>
            <TituloEstilizado >{horario}</TituloEstilizado>
        </DivEstilizada>
    );
}

export default HorarioAtual;
