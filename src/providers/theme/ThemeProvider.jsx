import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

export default function CustomThemeProvider(props) {
  return <ThemeProvider theme={theme}>{props}</ThemeProvider>;
}
