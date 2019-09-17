import { createMuiTheme } from "@material-ui/core/styles";
import cyan from "@material-ui/core/colors/cyan";
import yellow from "@material-ui/core/colors/yellow";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: cyan[900]
    },
    secondary: {
      main: yellow[500]
    },
    tonalOffset: 0.3
  }
});

export default theme;
