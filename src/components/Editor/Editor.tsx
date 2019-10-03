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
  AppActionTypes,
  Sections
} from "../../state/appState";
import useStyles from "./Editor.styles";

export enum FieldTypes {
  TEXT_FIELD = "textField",
  TEXT_AREA = "textArea"
}

const Editor: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const { sections } = useAppState();

  const generatePanel = (
    name: Sections,
    fields: {
      type: FieldTypes;
      name: string;
    }[],
    isOpen = false
  ) => {
    const fieldNodes: React.ReactNode[] = fields.map(field => {
      switch (field.type) {
        case FieldTypes.TEXT_FIELD:
          return generateTextField(name, field.name);
        case FieldTypes.TEXT_AREA:
          return generateTextField(name, field.name, true);
      }

      return null;
    });

    return (
      <ExpansionPanel
        key={`editor-section-${name}`}
        id={`editor-section-${name}`}
        className={classes.expansionPanel}
        defaultExpanded={isOpen}
        elevation={0}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`editor-section-${name}-content`}
          id={`editor-section-${name}-header`}
        >
          <Typography className={classes.summaryHeading}>
            {t(`${name}:title`)}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expansionPanelDetails}>
          {fieldNodes}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  };

  const generateTextField = (
    section: Sections,
    field: string,
    multiline = false
  ) => (
    <TextField
      key={`editor-textfield-${section}-${field}`}
      id={`editor-textfield-${section}-${field}`}
      className={classes.textField}
      label={t(`${section}:fields:${field}:label`)}
      placeholder={t(`${section}:fields:${field}:placeholder`, "")}
      variant="outlined"
      multiline={multiline}
      fullWidth
      InputLabelProps={{
        shrink: true
      }}
      defaultValue={
        sections[section] &&
        sections[section][field] &&
        sections[section][field].length > 0
          ? sections[section][field]
          : undefined
      }
      rows={multiline ? 5 : undefined}
      onChange={(event: React.ChangeEvent<{ value: unknown }>) =>
        typeof event.target.value === "string" &&
        dispatch({
          type: AppActionTypes.SET_FIELD_VALUE,
          payload: {
            section,
            field,
            value: event.target.value
          }
        })
      }
    />
  );

  const generalPanel = () =>
    generatePanel(
      Sections.GENERAL,
      [
        {
          type: FieldTypes.TEXT_FIELD,
          name: "siteName"
        },
        {
          type: FieldTypes.TEXT_FIELD,
          name: "siteUrl"
        }
      ],
      true
    );

  const registerPanel = () =>
    generatePanel(Sections.REGISTER, [
      {
        type: FieldTypes.TEXT_AREA,
        name: "controller"
      },
      {
        type: FieldTypes.TEXT_AREA,
        name: "contactPerson"
      },
      {
        type: FieldTypes.TEXT_FIELD,
        name: "name"
      },
      {
        type: FieldTypes.TEXT_AREA,
        name: "legalBasis"
      },
      {
        type: FieldTypes.TEXT_AREA,
        name: "purpose"
      },
      {
        type: FieldTypes.TEXT_AREA,
        name: "dataContent"
      },
      {
        type: FieldTypes.TEXT_AREA,
        name: "dataSources"
      },
      {
        type: FieldTypes.TEXT_AREA,
        name: "dataDisclosureTransferAndStorage"
      },
      {
        type: FieldTypes.TEXT_AREA,
        name: "securityPrinciples"
      },
      {
        type: FieldTypes.TEXT_AREA,
        name: "dataSubjectsRights"
      }
    ]);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      {generalPanel()}
      {registerPanel()}
    </form>
  );
};

export default Editor;
