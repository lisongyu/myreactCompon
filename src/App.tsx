import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";
require("./styles/index.scss");
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button className="custom">Hello</Button>
        <Button disabled>Disabled Hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          Large
        </Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com">
          Baidu link
        </Button>
        <Button disabled btnType={ButtonType.Link} href="http://www.baidu.com"
         
        >
          disabled link
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
