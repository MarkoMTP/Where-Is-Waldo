import "../styles/targetselector.css";

function TargetSelector({ x, y }) {
  console.log("TargetSelector rendered at", x, y);

  //handle check if it matches

  return (
    <>
      {" "}
      <div
        className="container"
        style={{
          position: "absolute",
          top: `${y}px`,
          left: `${x}px`,
          transform: "translate(-130%, -100%)",
          zIndex: 9999,
          borderRadius: "6px",
          color: "black", // make sure text is visible
          display: "inline-block",
        }}
      >
        <ul className="targetSelector">
          <li>
            <img src="/characters/meg.png" alt="Meg" />
          </li>
          <li>
            <img src="/characters/darknight.png" alt="Dark Knight" />
          </li>
          <li>
            <img src="/characters/joker.png" alt="Joker" />
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
