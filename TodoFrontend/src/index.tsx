import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from "mobx-react";
import { App } from "./App";
import { ApplicationStore } from "./stores";

import {ThemeProvider} from "mineral-ui/themes"

const applicationStore = new ApplicationStore();

const renderApp = (root: Element, RootApp: React.ComponentClass) => {
  ReactDOM.render((
    <Provider store={applicationStore}><ThemeProvider>
    <RootApp /></ThemeProvider></Provider>
  ), root);
};

const documentRoot = document.getElementById("root");
renderApp(documentRoot, App);

if (module.hot) {
  module.hot.accept("./App", () => {
    const NewApp = require("./App").App;
    renderApp(documentRoot, NewApp);
  });
}
