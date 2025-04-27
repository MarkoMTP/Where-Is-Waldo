import "../styles/targetselector.css";
import api from "../../api.js";
import { useGame } from "../context/GameContext.jsx";
function TargetSelector({ x, y, relativeX, relativeY }) {
  const { gameFinished, setGameFinished } = useGame();

  const handleClick = async function (name, relativeX, relativeY) {
    const result = await api.get(`/check/${name}/${relativeX}/${relativeY}`);

    if (result.data === "Game Finished Congratulations!") {
      setGameFinished(true);
    }
    console.log(result);
  };

  return (
    <>
      {" "}
      <div
        className="container"
        style={{
          position: "absolute",
          top: `${y}px`,
          left: `${x}px`,
          transform: "translate(-40%, -120%)",
          zIndex: 9999,
          borderRadius: "6px",
          color: "black", // make sure text is visible
          display: "inline-block",
        }}
      >
        <ul className="targetSelector">
          <li>
            <img
              src="/characters/meg.png"
              alt="Meg"
              onClick={() => handleClick("Meg", relativeX, relativeY)}
            />
          </li>
          <li>
            <img
              src="/characters/darknight.png"
              alt="Batman"
              onClick={() => handleClick("Batman", relativeX, relativeY)}
            />
          </li>
          <li>
            <img
              src="/characters/joker.png"
              alt="Joker"
              onClick={() => handleClick("Joker", relativeX, relativeY)}
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
          color: "black", // make sure text is visible
        }}
      ></div>
    </>
  );
}

export default TargetSelector;
