import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    maxWidth: theme.breakpoints.values.xl + theme.spacing(2),
    margin: "0 auto",
    padding: theme.spacing(1)
  }
}));

export default useStyles;
