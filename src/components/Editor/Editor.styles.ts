import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  summaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  expansionPanel: {
    backgroundColor: theme.palette.background.default,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: theme.palette.grey[300],
    "&::before": {
      display: "none"
    },
    "&:not(:first-child)": {
      top: -1
    }
  },
  expansionPanelDetails: {
    display: "flex",
    flexDirection: "column"
  },
  textField: {
    marginBottom: theme.spacing(4),
    "& fieldset": {
      backgroundColor: theme.palette.background.paper,
      zIndex: 1
    },
    "& input": {
      zIndex: 2
    },
    "& label": {
      zIndex: 2
    }
  }
}));

export default useStyles;
