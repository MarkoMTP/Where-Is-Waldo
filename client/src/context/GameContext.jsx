// src/context/GameContext.jsx
import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [gameFinished, setGameFinished] = useState(false);

  return (
    <GameContext.Provider
      value={{
        gameFinished,
        setGameFinished,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}
