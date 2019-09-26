import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "auto",
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: theme.palette.text.secondary
  },
  list: {
    listStyle: "none",
    display: "inline",
    "& li": {
      display: "inline",
      "&:not(:last-child)": {
        "&::after": {
          content: '" • "'
        }
      }
    }
  }
}));

export default useStyles;
