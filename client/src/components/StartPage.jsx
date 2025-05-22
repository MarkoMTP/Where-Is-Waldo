import { useNavigate } from "react-router-dom";
import startBtnHandler from "../middleware/StartButtonHandler";

export default function StartPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Where Is Waldo</h1>
      <button onClick={() => startBtnHandler(navigate)}>Start Game</button>

      {<button onClick={() => navigate("/leaderboard")}>Leaderboard</button>}
    </div>
  );
}
