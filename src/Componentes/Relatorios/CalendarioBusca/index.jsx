import { DatePicker, DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const CalendarioPesquisa = () => {
    return(
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs} label="Desktop variant">
                <DesktopDatePicker defaultValue={dayjs('2023-10-05')} />
            </LocalizationProvider>
        </>
       
        
    )
}

export default CalendarioPesquisa