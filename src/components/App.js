import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./Menu/index";
import Users from "./Users/index";
import Tasks from "./Tasks/index";

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Route exact path="/" component={Users}></Route>
      <Route exact path="/tasks" component={Tasks}></Route>
    </BrowserRouter>
  );
};

export default App;
