import React from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { theme } from "./themes/main";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./home/home";
import Blog from "./blog/blog";
import Navbar from "./navbar";
import Footer from "./footer";
import BlogPost from "./blog/blog-post";
import SignIn from "./auth/sign-in";
import NotFound from "./not-found";

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/blog/:postId" component={BlogPost} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </MuiThemeProvider>
  );
}
