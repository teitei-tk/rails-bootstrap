import * as React from "react";
import * as ReactDOM from "react-dom";

class Application extends React.Component {
  render() {
    return <div>Start Rails Application</div>;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Application />,
    document.body.appendChild(document.createElement("div"))
  );
});
