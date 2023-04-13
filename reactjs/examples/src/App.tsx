import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SideBar from "./components/SideBar";
import ClassComponents from "./views/LifeCycle/ClassComponents";
import FunctionComponents from "./views/LifeCycle/FunctionComponents";
import "./App.css";
import React from "react";
import { SideBarItemProps } from "./components/SideBar/types";

const dummyData = [
  { id: 0, name: "Test1", icon: "" },
  { id: 1, name: "Test2", icon: "" },
  { id: 2, name: "Test3", icon: "" },
  { id: 3, name: "Test4", icon: "" },
];
function App() {
  const [items, setItems] = React.useState<any>([]);
  useEffect(() => {
    // read file or call APIs

    setItems(dummyData);
  }, []);
  return <SideBar items={items} />;
}

export default App;
