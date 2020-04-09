import React from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { theme } from "./themes/main";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./home/home";
import Blog from "./blog/blog";
import Navbar from "./navbar";
import Footer from "./footer";

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/blog" component={Blog} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </MuiThemeProvider>
  );
}
