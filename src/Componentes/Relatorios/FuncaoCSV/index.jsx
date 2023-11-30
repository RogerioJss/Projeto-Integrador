import React from "react";
import { CSVLink } from "react-csv";

const CriarCSV = () => {
    const headers = [
        {label: 'Criador Relatorio', key: 'criador'},
        {label: 'ID do Terreiro', key: 'idTerreno'},
        {label: 'Data da criacao', key: 'dataCriacao'},
        {label: 'Tempo de funcionamento', key: 'tempoFuncionamento'},
    ]
    const data = [
        {criador: "Rogerio", idTerreno: "A7", dataCriacao: "23/03/2023", tempoFuncionamento: "7 horas"},
        {criador: "Rafael", idTerreno: "7F", dataCriacao: "23/03/2023", tempoFuncionamento: "2 horas"},
        {criador: "Gabriel", idTerreno: "A10", dataCriacao: "23/03/2023", tempoFuncionamento: "3 horas"},
        {criador: "Nickollas", idTerreno: "C4", dataCriacao: "23/03/2023", tempoFuncionamento: "9 horas"},
        {criador: "Vitor", idTerreno: "B2", dataCriacao: "23/03/2023", tempoFuncionamento: "10 horas"},
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
            Criar Relatorio CSV
        </CSVLink>
    </div>;
};

export default CriarCSV;