import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4)
  },
  title: {
    flexGrow: 1,
    fontSize: "calc(10px + 2vmin)",
    fontWeight: 600,
    color: theme.palette.primary.dark
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.dark,
    "&:hover": {
      color: theme.palette.primary.main,
      textDecoration: "none"
    }
  }
}));

export default useStyles;
