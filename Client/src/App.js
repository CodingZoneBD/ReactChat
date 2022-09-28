import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Join from "./components/Join";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" component={Join} />
          <Route path="/chat" component={Chat} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
