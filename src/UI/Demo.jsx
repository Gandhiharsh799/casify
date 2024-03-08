
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function Demo({ label, name }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      
        <DatePicker label={label} name={name} sx={{ width: "45%" }}  />
    
    </LocalizationProvider>
  );
}
