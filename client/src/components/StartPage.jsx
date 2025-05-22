import { useNavigate } from "react-router-dom";
import startBtnHandler from "../middleware/StartButtonHandler";

export default function StartPage() {
  const navigate = useNavigate();

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>🎯 Where Is Waldo?</h1>

      <div style={buttonGroupStyle}>
        <button style={buttonStyle} onClick={() => startBtnHandler(navigate)}>
          ▶️ Start Game
        </button>
        <button
          style={{ ...buttonStyle, backgroundColor: "#6c757d" }}
          onClick={() => navigate("/leaderboard")}
        >
          🏆 Leaderboard
        </button>
      </div>
    </div>
  );
}

const containerStyle = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f0f4f8",
  fontFamily: "Segoe UI, sans-serif",
};

const titleStyle = {
  fontSize: "3rem",
  marginBottom: "2rem",
  color: "#333",
};

const buttonGroupStyle = {
  display: "flex",
  gap: "1rem",
};

const buttonStyle = {
  padding: "1rem 2rem",
  fontSize: "1rem",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};
