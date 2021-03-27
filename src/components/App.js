import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./Menu/index";
import Users from "./Users/index";
import Tasks from "./Tasks/index";
import Publications from "./Publications/index";
import SaveTask from "./Tasks/Save";

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Route exact path="/" component={Users}></Route>
      <Route exact path="/tasks" component={Tasks}></Route>
      <Route exact path="/publications/:id" component={Publications}></Route>
      <Route exact path="/tasks/save" component={SaveTask}></Route>
      <Route
        exact
        path="/tasks/save/:userId/:taskId"
        component={SaveTask}
      ></Route>
    </BrowserRouter>
  );
};

export default App;
