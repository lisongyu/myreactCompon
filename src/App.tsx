import React from "react";
import "./App.css";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
require("./styles/index.scss");
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={0} mode="vertical" onSelect={(index)=>{alert(index)}}>
          <MenuItem index={0}>
            cool link
          </MenuItem>
          <MenuItem index={1} disabled>
            cool link2
          </MenuItem>
          <MenuItem index={2}>
            cool link3
          </MenuItem>
        </Menu>
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
