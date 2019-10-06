import React from "react";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import useStyles from "./Header.styles";
import i18n from "../../i18n/i18n";

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
      <section className={classes.leftsection}>
        <span>
          {title}
          {subtitle}
        </span>
      </section>
      <section className={classes.rightsection}>
        <p>{t("header:language")}</p>
        <select
          onChange={e => {
            i18n.changeLanguage(e.target.value);
          }}
          defaultValue={i18n.language}
        >
          {(t("header:languages", { returnObjects: true }) as [
            { title: string; value: string }
          ]).map(c => (
            <option value={c.value} key={c.value}>
              {c.title}
            </option>
          ))}
        </select>
      </section>
    </header>
  );
};

export default Header;
