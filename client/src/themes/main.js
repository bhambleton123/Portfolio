import { createMuiTheme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  typography: {
    fontFamily: "'Baloo Thambi 2', serif",
    fontSize: 17,
  },
  palette: {
    primary: {
      main: grey[50],
    },
    secondary: {
      main: grey[500],
    },
    background: {
      default: "#95D5D4",
    },
  },
});
