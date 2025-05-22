import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";

export default function Leaderboard() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const response = await api.get("/leaderboard");
        const sorted = response.data.sort((a, b) => a.time - b.time);
        setPlayers(sorted);
      } catch (err) {
        console.error("Failed to load leaderboard:", err);
      }
    }

    fetchLeaderboard();
  }, []);

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>🏆 Leaderboard 🏆</h1>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle}>Position</th>
            <th style={thTdStyle}>Player Name</th>
            <th style={thTdStyle}>Time (seconds)</th>
          </tr>
        </thead>
        <tbody>
          {players.length > 0 ? (
            players.map((player, index) => (
              <tr key={player.id}>
                <td style={thTdStyle}>{index + 1}</td>
                <td style={thTdStyle}>{player.name}</td>
                <td style={thTdStyle}>{player.time}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={thTdStyle}>
                No players found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <button style={buttonStyle} onClick={() => navigate("/")}>
        ⬅ Back to Home
      </button>
    </div>
  );
}

const containerStyle = {
  padding: "2rem",
  textAlign: "center",
  backgroundColor: "#f7f9fc",
  minHeight: "100vh",
  fontFamily: "Segoe UI, sans-serif",
};

const headingStyle = {
  fontSize: "2.5rem",
  marginBottom: "1.5rem",
  color: "#333",
};

const tableStyle = {
  margin: "0 auto",
  borderCollapse: "collapse",
  width: "90%",
  maxWidth: "600px",
  backgroundColor: "#fff",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  borderRadius: "8px",
  overflow: "hidden",
};

const thTdStyle = {
  border: "1px solid #ddd",
  padding: "12px",
  textAlign: "center",
  fontSize: "1rem",
};

const buttonStyle = {
  marginTop: "2rem",
  padding: "0.75rem 1.5rem",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "1rem",
  transition: "background-color 0.3s ease",
};
