import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";

import theme from "../../theme";
import useStyles from "./App.styles";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home: React.FC = () => {
  const classes = useStyles();

  return <Paper className={classes.paper}>Coming soon!</Paper>;
};

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <div className={classes.root}>
          <Header />
          <Switch>
            <Route component={Home} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
