import React from "react";
import "./App.css";

import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
require("./styles/index.scss");
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu
          defaultIndex={0}
          onSelect={(index) => {
            alert(index);
          }}
        >
          <MenuItem index={0}>cool link</MenuItem>
          <MenuItem index={1} disabled>
            cool link2
          </MenuItem>
          <SubMenu title="dropdown">
            <MenuItem index={0}>dropdown 1</MenuItem>
            <MenuItem index={1}>dropdown 2</MenuItem>
          </SubMenu>
          <MenuItem index={2}>cool link3</MenuItem>
        </Menu>

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
