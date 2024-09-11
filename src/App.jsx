import React from "react";
import ParentComponent from "./components/ParentComponent";
import "./App.css";
import Button from "./components/Button";
import State from "./components/State";
import Event from "./components/Event";
import ConditionRendering from "./components/ConditionRendering";

export default function App() {
  return (
    <div>
      {/* <ParentComponent />

      <Button htmlType={"submit"} type={"primary"}>
        <div>OK</div>
      </Button> */}
      {/* <State /> */}
      {/* <Event /> */}
      <ConditionRendering />
    </div>
  );
}
