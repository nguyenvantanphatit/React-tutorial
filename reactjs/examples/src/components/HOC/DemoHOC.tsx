import React from "react";

export default function DemoHOC({ onShowAlert }:any) {
  return <div onClick={onShowAlert}>DemoHOC</div>;
}
