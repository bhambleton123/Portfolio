import React from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { theme } from "./themes/main";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./home/home";

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}
