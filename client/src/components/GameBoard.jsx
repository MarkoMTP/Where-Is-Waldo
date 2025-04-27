import { useEffect, useRef, useState } from "react";
import TargetSelector from "./TargetSelector";
import { useGame } from "../context/GameContext";

function Gameboard() {
  const [clickCoords, setClickCoords] = useState(null);
  const imageRef = useRef();
  const { gameFinished, setGameFinished } = useGame();

  const handleClick = function (e) {
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const relativeX = (x / rect.width) * 100;
    const relativeY = (y / rect.width) * 100;

    setClickCoords({ x, y, relativeX, relativeY });
  };

  return (
    <div
      style={{
        position: "relative", // 🔥 Required for absolute positioning to work inside
        width: "100vw",
        minHeight: "100vh",
        overflowY: "auto",
        padding: 0,
        margin: 0,
      }}
    >
      <img
        src="/backg.jpg"
        ref={imageRef}
        onClick={handleClick}
        alt="Game Background"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />

      {clickCoords && (
        <TargetSelector
          x={clickCoords.x}
          y={clickCoords.y}
          relativeX={clickCoords.relativeX}
          relativeY={clickCoords.relativeY}
          onClose={() => setClickCoords(null)}
        />
      )}
      {gameFinished === true ? <h1>Hello</h1> : null}
    </div>
  );
}

export default Gameboard;
