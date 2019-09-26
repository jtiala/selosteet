import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2, 0),
    [theme.breakpoints.down("sm")]: {
      textAlign: "center"
    }
  },
  title: {
    flexGrow: 1,
    fontSize: theme.typography.pxToRem(24),
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.dark
  },
  subtitle: {
    lineHeight: 1.2,
    marginTop: theme.spacing(1)
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
