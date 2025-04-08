import { useEffect, useRef, useState } from "react";
import TargetSelector from "./TargetSelector";

function Gameboard() {
  const [clickCoords, setClickCoords] = useState(null);
  const imageRef = useRef();

  const handleClick = function (e) {
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const relativeX = (x / rect.width) * 100;
    const relativeY = (y / rect.width) * 100;

    console.log(relativeX, relativeY);
    setClickCoords({ x, y });
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
          onClose={() => setClickCoords(null)}
        />
      )}
    </div>
  );
}

export default Gameboard;
