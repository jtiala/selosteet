import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { AppStateProvider } from "../../state/appState";
import theme from "../../theme";
import useStyles from "./App.styles";
import Header from "../Header/Header";
import EditorPage from "../EditorPage/EditorPage";
import Footer from "../Footer/Footer";

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <AppStateProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <CssBaseline />
          <div className={classes.root}>
            <Header />
            <Switch>
              <Route>
                <EditorPage />
              </Route>
            </Switch>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </AppStateProvider>
  );
};

export default App;
