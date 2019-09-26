import React from "react";
import { useTranslation } from "react-i18next";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import {
  useAppDispatch,
  useAppState,
  AppActionTypes
} from "../../state/appState";
import useStyles from "./Editor.styles";

const Editor: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const { siteName, siteUrl } = useAppState();

  const generatePanel = (
    name: string,
    children?: React.ReactNode,
    isDefault = false
  ) => (
    <ExpansionPanel
      key={`editor-panel-${name}`}
      id={`editor-panel-${name}`}
      className={classes.expansionPanel}
      defaultExpanded={isDefault}
      elevation={0}
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`editor-panel-${name}-content`}
        id={`editor-panel-${name}-header`}
      >
        <Typography className={classes.summaryHeading}>
          {t(`editor:panels:${name}:title`)}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.expansionPanelDetails}>
        {children}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );

  const generateTextField = (
    name: string,
    value: string,
    actionType: AppActionTypes
  ) => {
    console.log(value);
    return (
      <TextField
        key={`editor-textfield-${name}`}
        id={`editor-textfield-${name}`}
        className={classes.textField}
        label={t(`editor:fields:${name}:label`)}
        variant="outlined"
        fullWidth
        InputLabelProps={{
          shrink: true
        }}
        value={value}
        onChange={(event: React.ChangeEvent<{ value: unknown }>) =>
          typeof event.target.value === "string" &&
          dispatch({
            type: actionType,
            value: event.target.value
          })
        }
      />
    );
  };

  const generalInformationPanel = () =>
    generatePanel(
      "generalInformation",
      [
        generateTextField("siteName", siteName, AppActionTypes.SET_SITE_NAME),
        generateTextField("siteUrl", siteUrl, AppActionTypes.SET_SITE_URL)
      ],
      true
    );

  return (
    <form className={classes.root} noValidate autoComplete="off">
      {generalInformationPanel()}
    </form>
  );
};

export default Editor;
