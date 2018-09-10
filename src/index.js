import React from "react";
import ReactDOM from "react-dom";

import "src/styles/app.scss";
import "src/styles/normalize.scss";

const App = () => (
  <div>
    Hello, world!
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
