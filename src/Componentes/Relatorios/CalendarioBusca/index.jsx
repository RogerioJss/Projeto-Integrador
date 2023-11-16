
import {  DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import {  useState } from "react";

const CalendarioPesquisa = () => {
   const [dataAtual, setDataAtual] = useState(dayjs())
   const [novaDataSelecionada, setNovaDataSelecionada] = useState(dataAtual)
   function dataSelecionada (novaData) {
    setDataAtual(novaData)
    setNovaDataSelecionada(novaData)
    console.log(novaData)
   }
    return(
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs} label="Desktop variant">
                <DesktopDatePicker valorNovaData={novaDataSelecionada} value={dataAtual} onChange={dataSelecionada} format="D/M/YYYY"/>
            </LocalizationProvider>
        </>
       
        
    )
}

export default CalendarioPesquisa