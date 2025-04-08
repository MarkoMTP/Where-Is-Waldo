import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Gameboard from "../components/GameBoard";
import TargetSelector from "../components/TargetSelector";

describe("Gameboard", () => {
  it("renders the background image", () => {
    render(<Gameboard />);
    const image = screen.getByAltText(/Game background/i);
    expect(image).toBeInTheDocument();
  });

  it("Renders the target selector when user clicks on the screen", async () => {
    render(<Gameboard />);

    const image = screen.getByAltText(/Game background/i);

    fireEvent.click(image);
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });
});
