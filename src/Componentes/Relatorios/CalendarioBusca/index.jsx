import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useState } from "react";

const CalendarioPesquisa = ({dataSelect}) => {
  const [dataAtual, setDataAtual] = useState(dayjs());
  const [novaDataSelecionada, setNovaDataSelecionada] = useState(dataAtual);
  function dataSelecionada(novaData) {
    setDataAtual(novaData);
    setNovaDataSelecionada(novaData);
    dataSelect(novaData)
    console.log(novaData);
  }
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs} label="Desktop variant">
        <DesktopDatePicker
          valorNovaData={novaDataSelecionada}
          value={dataAtual}
          onChange={dataSelecionada}
          format="D/M/YYYY"
          dataSelect={dataSelecionada}
        />
      </LocalizationProvider>
    </>
  );
};

export default CalendarioPesquisa;
