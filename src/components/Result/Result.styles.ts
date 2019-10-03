import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  tabs: {
    "& button": {
      minWidth: "auto",
      flexGrow: 1
    }
  },
  pre: {
    whiteSpace: "pre-line",
    padding: theme.spacing(4),
    "& h1": {
      fontSize: theme.typography.pxToRem(24),
      fontWeight: theme.typography.fontWeightBold
    },
    "& h2": {
      fontSize: theme.typography.pxToRem(20),
      fontWeight: theme.typography.fontWeightBold
    }
  }
}));

export default useStyles;
