import "./App.css";

import Gameboard from "./components/GameBoard";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        overflowY: "auto",
        padding: 0,
        margin: 0,
      }}
    >
      <Gameboard></Gameboard>
    </div>
  );
}

export default App;
