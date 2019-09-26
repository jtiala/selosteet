import React from "react";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import useStyles from "./Header.styles";

const Header: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const title = (
    <Typography variant="h1" className={classes.title}>
      <Link className={classes.link} component={RouterLink} to="/">
        {t("header:title")}
      </Link>
    </Typography>
  );

  const subtitle = (
    <Typography variant="subtitle1" className={classes.subtitle}>
      {t("header:subtitle")}
    </Typography>
  );

  return (
    <header className={classes.root}>
      <span>
        {title}
        {subtitle}
      </span>
    </header>
  );
};

export default Header;
