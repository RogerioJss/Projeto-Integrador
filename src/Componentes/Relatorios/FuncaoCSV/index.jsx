import React from "react";
import { CSVLink } from "react-csv";

const CriarCSV = ({criadorCSV, horaCriacao, dataCriacaoCSV,tempoFuncionamentoCSV}) => {
    const headers = [
        {label: 'Criador Relatorio', key: 'criador'},
        {label: 'Hora Criação', key: 'horaCriacao'},
        {label: 'Data da Criação', key: 'dataCriacao'},
        {label: 'Tempo de funcionamento', key: 'tempoFuncionamento'},
    ]
    const data = [
        {criador: criadorCSV, horaCriacao: horaCriacao, dataCriacao: dataCriacaoCSV, tempoFuncionamento: tempoFuncionamentoCSV}
    ]
    const styleLink = {
        textDecoration: 'none',
        color: 'white',
    }
    return <div>
        <CSVLink
            data={data}
            headers={headers}
            filename={"relatorio"}
            target="_blank"
            style={styleLink}
        >
            Baixar Relatorio CSV
        </CSVLink>
    </div>;
};

export default CriarCSV;