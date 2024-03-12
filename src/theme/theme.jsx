import styled from "@emotion/styled";
import { TableRow } from "@mui/material";

const StyledRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "white",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#ece5ff",
  },
  "&:nth-of-type(even):hover": {
    backgroundColor: "#dceff7",
  },
  "&:nth-of-type(odd):hover": {
    backgroundColor: "#dceff7",
  },
}));

export default StyledRow;
