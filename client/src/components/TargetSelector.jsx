import "../styles/targetselector.css";
import api from "../../api.js";
import { useGame } from "../context/GameContext.jsx";

function TargetSelector({ x, y, relativeX, relativeY }) {
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

  const handleClick = async (name) => {
    const result = await api.get(`/check/${name}/${relativeX}/${relativeY}`);

    console.log(result.data);

    if (result.data === "Meg has been Found") {
      setMegFound(true);
    }

    if (result.data === "Joker has been Found") {
      setJokerFound(true);
    }

    if (result.data === "Batman has been Found") {
      setBatmanFound(true);
    }

    if (result.data === "Game Finished Congratulations!") {
      setGameFinished(true);
    }
  };

  return (
    <>
      <div
        className="container"
        style={{
          position: "absolute",
          top: `${y}px`,
          left: `${x}px`,
          transform: "translate(-40%, -120%)",
          zIndex: 9999,
          borderRadius: "6px",
          color: "black",
          display: "inline-block",
        }}
      >
        <ul className="targetSelector">
          <li>
            <img
              src="/characters/meg.png"
              alt="Meg"
              onClick={() => handleClick("Meg")}
            />
          </li>
          <li>
            <img
              src="/characters/darknight.png"
              alt="Batman"
              onClick={() => handleClick("Batman")}
            />
          </li>
          <li>
            <img
              src="/characters/joker.png"
              alt="Joker"
              onClick={() => handleClick("Joker")}
            />
          </li>
        </ul>
      </div>

      <div
        style={{
          position: "absolute",
          top: `${y}px`,
          left: `${x}px`,
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          border: "4px dotted red",
          padding: "3rem",
          color: "black",
        }}
      />
    </>
  );
}

export default TargetSelector;
