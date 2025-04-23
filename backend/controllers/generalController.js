import checkGame from "../middleware/checkGame.js";
import findAllChars, { addNewStartTime } from "../queries.js";
import { updateIsFound } from "../queries.js";

export default async function controllerCheckCharacter(req, res) {
  try {
    const { name, x, y } = req.params;
    const relativeX = Number(x);
    const relativeY = Number(y);
    const TOLERANCE = 15;

    const xMin = relativeX - TOLERANCE;
    const xMax = relativeX + TOLERANCE;
    const yMin = relativeY - TOLERANCE;
    const yMax = relativeY + TOLERANCE;

    const chars = await findAllChars();

    if (chars.length === 0) {
      return res.status(404).json({ message: "No characters found" });
    }

    const character = chars.find((char) => char.name === name);

    if (!character) {
      return res.status(404).send("The name does not match");
    }

    if (
      character.x >= xMin &&
      character.x <= xMax &&
      character.y >= yMin &&
      character.y <= yMax
    ) {
      await updateIsFound(name);
      const isGameFinished = await checkGame();

      if (isGameFinished === true) {
        return res.status(200).send("Game Finished Congratulations!");
      } else {
        return res.status(200).send(`${name} has been Found`);
      }
    } else {
      return res.status(404).send("Name matched but coordinates don't");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}

export async function startGame(req, res) {
  try {
    await addNewStartTime();
    res.status(404).send("Game Started");
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}
