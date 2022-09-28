import React from "react"
import { BrowsweRouter as Router, route, Switch } from "react-router-dom"
import Join from "./components/Join";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" compoent={Join} />
          <Route path="/chat" compoent={Chat} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
