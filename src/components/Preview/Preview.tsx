import React from "react";
import { useTranslation } from "react-i18next";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { useAppState } from "../../state/appState";
import useStyles from "./Preview.styles";

const Preview: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { siteName, siteUrl } = useAppState();

  const title = (
    <Typography variant={"h1"} className={classes.title}>
      {t("preview:title")}
    </Typography>
  );

  const subtitle = siteName.length > 0 && (
    <Typography variant={"h2"} className={classes.subtitle}>
      {siteName} {siteUrl.length > 0 && <span>({siteUrl})</span>}
    </Typography>
  );

  return (
    <Paper className={classes.root}>
      {title}
      {subtitle}
    </Paper>
  );
};

export default Preview;
