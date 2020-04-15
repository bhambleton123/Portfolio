import React, { useState, useEffect } from "react";
import { MuiThemeProvider, CssBaseline, Box } from "@material-ui/core";
import { theme } from "./themes/main";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { userContext } from "./context/user-context";
import axios from "axios";
import Home from "./home/home";
import Blog from "./blog/blog";
import Navbar from "./navbar";
import Footer from "./footer";
import BlogPost from "./blog/blog-post";
import BlogCreate from "./blog/blog-create";
import SignIn from "./auth/sign-in";
import NotFound from "./not-found";
import "./body.css";
import "draft-js/dist/Draft.css";

export default function App() {
  const [user, setUser] = useState({ User: {} });
  
  useEffect(() => {
    axios
      .get("/api/user")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <userContext.Provider value={user}>
          <Navbar setUser={setUser} />
          <Switch>
            <Route exact path="/blog/create" component={BlogCreate} />
            <Route exact path="/blog/post/:postId" component={BlogPost} />
            <Route exact path="/blog" component={Blog} />
            <Route
              exact
              path="/sign-in"
              render={() => <SignIn setUser={setUser} />}
            />
            <Route exact path="/" component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
        </userContext.Provider>
        <Footer />
      </BrowserRouter>
    </MuiThemeProvider>
  );
}
