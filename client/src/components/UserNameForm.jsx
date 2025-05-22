import { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";

export default function UsernamePopup() {
  const [username, setUsername] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
    window.location.reload();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("end", { userName: username });
      setSubmitted(true);
      setError(""); // Clear any previous error
    } catch (err) {
      console.error("Submission failed:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div style={popupOverlayStyle}>
        <div style={thankYouStyle}>
          <h2 style={thankYouTitleStyle}>🎉 Thank you, {username}! 🎉</h2>
          <p style={thankYouTextStyle}>
            Your score has been successfully submitted.
          </p>
          <button onClick={handleGoBack} style={buttonStyle}>
            Go Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={popupOverlayStyle}>
      <form onSubmit={handleSubmit} style={popupFormStyle}>
        <h2>Enter Your Name</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
        {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
      </form>
    </div>
  );
}

// 🔥 Inline styles
const popupOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const popupFormStyle = {
  background: "white",
  padding: "2rem",
  borderRadius: "8px",
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
};

const inputStyle = {
  width: "100%",
  padding: "0.5rem",
  margin: "1rem 0",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  padding: "0.5rem 1rem",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const thankYouStyle = {
  background: "#f0fff4",
  padding: "2rem",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  border: "2px solid #38a169",
  minWidth: "300px",
};

const thankYouTitleStyle = {
  color: "#38a169",
  fontSize: "1.5rem",
  marginBottom: "1rem",
};

const thankYouTextStyle = {
  color: "#2f855a",
  fontSize: "1rem",
  marginBottom: "1.5rem",
};
