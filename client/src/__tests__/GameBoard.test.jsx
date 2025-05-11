import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Gameboard from "../components/GameBoard";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { GameContext, GameProvider } from "../context/GameContext";

describe("Gameboard", () => {
  it("renders the background image", () => {
    render(
      <MemoryRouter initialEntries={["/game"]}>
        {" "}
        {/* ✅ Start at /game */}
        <GameProvider>
          <Routes>
            <Route path="/game" element={<Gameboard />} />{" "}
            {/* ✅ Correct path */}
          </Routes>
        </GameProvider>
      </MemoryRouter>
    );

    const image = screen.getByAltText(/Game background/i);
    expect(image).toBeInTheDocument();
  });

  it("Renders the target selector when user clicks on the screen", async () => {
    render(
      <MemoryRouter initialEntries={["/game"]}>
        {" "}
        {/* ✅ Start at /game */}
        <GameProvider>
          <Routes>
            <Route path="/game" element={<Gameboard />} />{" "}
            {/* ✅ Correct path */}
          </Routes>
        </GameProvider>
      </MemoryRouter>
    );

    const image = screen.getByAltText(/Game background/i);

    fireEvent.click(image);

    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });

  it("Renders the username form when game is finished", async () => {
    render(
      <MemoryRouter initialEntries={["/game"]}>
        <GameContext.Provider
          value={{ gameFinished: true, setGameFinished: () => {} }}
        >
          <Routes>
            <Route path="/game" element={<Gameboard />} />
          </Routes>
        </GameContext.Provider>
      </MemoryRouter>
    );

    // assert the form or heading exists
    expect(screen.getByText(/Enter Your Name/i)).toBeInTheDocument();
  });
});
