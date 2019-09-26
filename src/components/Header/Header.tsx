import React from "react";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";

import useStyles from "./Header.styles";

const Header: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const title = (
    <Typography variant="h1" className={classes.title}>
      <Link className={classes.link} component={RouterLink} to="/">
        {t("Selosteet.fi")}
      </Link>
    </Typography>
  );

  return <Toolbar className={classes.root}>{title}</Toolbar>;
};

export default Header;
