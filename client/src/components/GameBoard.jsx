import { useEffect, useRef, useState } from "react";
import TargetSelector from "./TargetSelector";
import { useGame } from "../context/GameContext";
import UsernamePopup from "./UserNameForm";
import CrossMarker from "./CrossMarker";
import getPixelPosition from "../middleware/getPixelPosition";

function Gameboard() {
  const [clickCoords, setClickCoords] = useState(null);
  const imageRef = useRef();
  const {
    gameFinished,
    setGameFinished,
    megFound,
    setMegFound,
    jokerFound,
    setJokerFound,
    batmanFound,
    setBatmanFound,
  } = useGame();

  const megPosition = getPixelPosition(imageRef, 44.95, 288.84);
  const jokerPosition = getPixelPosition(imageRef, 77, 76.7);
  const batmanPosition = getPixelPosition(imageRef, 4.15, 261.2);

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

      {clickCoords && gameFinished === false && (
        <TargetSelector
          x={clickCoords.x}
          y={clickCoords.y}
          relativeX={clickCoords.relativeX}
          relativeY={clickCoords.relativeY}
          onClose={() => setClickCoords(null)}
        />
      )}

      {megFound && <CrossMarker x={megPosition.x} y={megPosition.y} />}
      {jokerFound && <CrossMarker x={jokerPosition.x} y={jokerPosition.y} />}
      {batmanFound && <CrossMarker x={batmanPosition.x} y={batmanPosition.y} />}

      {gameFinished === true ? <UsernamePopup /> : null}
    </div>
  );
}

export default Gameboard;
