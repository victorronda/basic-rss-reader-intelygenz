import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Title from "./components/Title/Title";
import FeedDetailedPage from "./pages/FeedDetailedPage/FeedDetailedPage";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css";

export default function App() {
  return (
    <Fragment>
      <Title />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/feed/:id" component={FeedDetailedPage} />
      </Switch>
    </Fragment>
  );
}
