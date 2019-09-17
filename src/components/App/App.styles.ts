import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  paper: {
    margin: theme.spacing(4),
    padding: theme.spacing(4),
    width: 900,
    alignSelf: "center",
    [theme.breakpoints.down("sm")]: {
      width: "95%"
    }
  },
  title: {
    fontSize: "calc(10px + 4vmin)",
    marginBottom: theme.spacing(4)
  }
}));

export default useStyles;
