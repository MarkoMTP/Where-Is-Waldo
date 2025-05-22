import { useEffect, useState } from "react";
import api from "../../api";

export default function Leaderboard() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const response = await api.get("/leaderboard"); // Adjust the URL if needed

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
      <h1>🏆 Leaderboard 🏆</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Position</th>
            <th>Player Name</th>
            <th>Time (seconds)</th>
          </tr>
        </thead>
        <tbody>
          {players.length > 0 ? (
            players.map((player, index) => (
              <tr key={player.id}>
                <td>{index + 1}</td>
                <td>{player.name}</td>
                <td>{player.time}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No players found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

const containerStyle = {
  padding: "2rem",
  textAlign: "center",
};

const tableStyle = {
  margin: "0 auto",
  borderCollapse: "collapse",
  width: "80%",
  maxWidth: "600px",
  border: "1px solid #ddd",
};
