import { useNavigate } from "react-router-dom";

export default function StartPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Where Is Waldo</h1>
      <button onClick={() => navigate("/game")}>Start Game</button>
      {/* <button onClick={() => navigate("/leaderboard")}>Leaderboard</button> */}
    </div>
  );
}
