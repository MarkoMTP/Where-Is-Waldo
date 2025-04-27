import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import StartPage from "../components/StartPage";
import Gameboard from "../components/GameBoard";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Start Page", () => {
  it("Renders buttons on start page", async () => {
    render(
      <MemoryRouter>
        <StartPage />
      </MemoryRouter>
    );

    expect(screen.getByRole("button", { name: /Start/i })).toBeInTheDocument();
  });

  it("Simulates a user starting the game by clicking on the start button", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/game" element={<Gameboard />} />
        </Routes>
      </MemoryRouter>
    );

    const startBtn = screen.getByRole("button", { name: /Start/i });

    await userEvent.click(startBtn);

    const image = screen.getByAltText(/Game background/i);
    expect(image).toBeInTheDocument();
  });
});
