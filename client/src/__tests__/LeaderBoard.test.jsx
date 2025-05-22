import { render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, it, vi, expect } from "vitest";
import Leaderboard from "../components/LeaderBoard";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import api from "../../api";
import "@testing-library/jest-dom";
import { GameProvider } from "../context/GameContext";
vi.mock("../../api", () => ({
  default: {
    get: vi.fn(),
  },
}));

afterEach(() => {
  vi.resetAllMocks();
});

describe("Leaderboard Component", () => {
  it("renders player names and times", async () => {
    api.get.mockResolvedValue({
      data: [
        { id: 1, name: "Alice", time: 12 },
        { id: 2, name: "Bob", time: 15 },
      ],
    });

    render(<Leaderboard />);
    await waitFor(() => {
      expect(screen.getByText("Alice")).toBeInTheDocument();
      expect(screen.getByText("12")).toBeInTheDocument();
      expect(screen.getByText("Bob")).toBeInTheDocument();
      expect(screen.getByText("15")).toBeInTheDocument();
    });
  });

  it("shows fallback when no players exist", async () => {
    api.get.mockResolvedValue({ data: [] });

    render(<Leaderboard />);

    await waitFor(() => {
      expect(screen.getByText("No players found")).toBeInTheDocument();
    });
  });
});
