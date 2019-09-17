import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { useTranslation, Trans } from "react-i18next";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import theme from "../../theme";
import useStyles from "./App.styles";

const Home: React.FC = () => {
  const classes = useStyles();
  const { i18n } = useTranslation();

  const title = (
    <Typography variant="h1" className={classes.title}>
      Selosteet.fi
    </Typography>
  );

  const siteLink = (
    <Link href="https://selosteet.fi" target="_blank" rel="noopener noreferrer">
      https://selosteet.fi
    </Link>
  );

  const mailLink = (
    <Link
      href="mailto:info@selosteet.fi"
      target="_blank"
      rel="noopener noreferrer"
    >
      info@selosteet.fi
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
    <Paper className={classes.paper}>
      {title}
      {siteLink}
      {" | "}
      {mailLink}
      {" | "}
      <Trans
        i18n={i18n}
        i18nKey="Source available at GitHub"
        components={[githubLink]}
      ></Trans>
    </Paper>
  );
};

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <div className={classes.root}>
          <Switch>
            <Route component={Home} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
