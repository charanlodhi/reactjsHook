import React from "react";
import { ComponentContext } from "./App";
function Title() {
  return (
    <div>
      <ComponentContext.Consumer>
        {(name) => {
          return <>{name}</>;
        }}
      </ComponentContext.Consumer>
    </div>
  );
}

export default Title;
