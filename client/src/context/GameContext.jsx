// src/context/GameContext.jsx
import { createContext, useContext, useState } from "react";

export const GameContext = createContext();

export function GameProvider({ children }) {
  const [gameFinished, setGameFinished] = useState(false);
  const [megFound, setMegFound] = useState(false);
  const [jokerFound, setJokerFound] = useState(false);
  const [batmanFound, setBatmanFound] = useState(false);

  return (
    <GameContext.Provider
      value={{
        gameFinished,
        setGameFinished,
        megFound,
        setMegFound,
        jokerFound,
        setJokerFound,
        batmanFound,
        setBatmanFound,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}
