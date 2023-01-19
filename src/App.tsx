import { useEffect, useState } from "react";
import { Routes, Route, Link, useRoutes } from "react-router-dom";
import "./App.css";
import { immediateExecution } from "../src/untils/special_effects.js";
// 导入路由组件
import { routes } from "./router/router";

function App() {
  const Outlet = useRoutes(routes);
  useEffect(() => {
    immediateExecution();
  });

  return <div className="App">{Outlet}</div>;
}

export default App;
