import React from "react";
import ReactDOM from 'react-dom';
import "./index.css";
import {Contact} from "./contact";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Contact/>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
