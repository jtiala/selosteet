import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

import useStyles from "./Footer.styles";

const Footer: React.FC = () => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  const siteLink = (
    <Link component={RouterLink} to="/">
      {t("Selosteet.fi")}
    </Link>
  );

  const mailLink = (
    <Link
      href="mailto:info@selosteet.fi"
      target="_blank"
      rel="noopener noreferrer"
    >
      {t("info@selosteet.fi")}
    </Link>
  );

  const githubLink = (
    <Link
      href="https://github.com/jtiala/selosteet"
      target="_blank"
      rel="noopener noreferrer"
    />
  );

  return (
    <footer className={classes.root}>
      <ul className={classes.list}>
        <li>{siteLink}</li>
        <li>{mailLink}</li>
        <li>
          <Trans
            i18n={i18n}
            i18nKey="Source available at GitHub"
            components={[githubLink]}
          ></Trans>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
