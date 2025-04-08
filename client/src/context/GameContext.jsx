// src/context/GameContext.jsx
import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [clickCoordX, setClickCoordX] = useState(null);
  const [clickCoordY, setClickCoordY] = useState(null);

  const [foundCharacters, setFoundCharacters] = useState([]);
  const [sessionId, setSessionId] = useState(null);

  return (
    <GameContext.Provider
      value={{
        clickCoordX,
        setClickCoordX,
        clickCoordY,
        setClickCoordY,
        foundCharacters,
        setFoundCharacters,
        sessionId,
        setSessionId,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}
