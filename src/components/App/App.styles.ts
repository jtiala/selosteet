import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 1024,
    margin: "0 auto",
    padding: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(4)
  }
}));

export default useStyles;
