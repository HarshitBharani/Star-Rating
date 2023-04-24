import "./App.css";
import { StarRating } from "./components/Star";
import React from "react";
function App() {
  return (
    <div className="App">
      <StarRating stars={6} />
    </div>
  );
}

export default App;
