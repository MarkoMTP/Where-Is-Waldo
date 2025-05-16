import checkGame from "../middleware/checkGame.js";
import { updateEndTimeOfLatest } from "../middleware/getTime.js";
import { startGame } from "../middleware/startGame.js";
import findAllChars, {
  addNewPlayer,
  addNewStartTime,
  findLatestTime,
  resetGameCharacters,
} from "../queries.js";
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
        //added this check it out why it does not reset the game
        await resetGameCharacters();

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

export async function startGameController(req, res) {
  try {
    await startGame();
    res.status(200).send("Game started");
  } catch (err) {
    console.error(err);
    res.status(404).json({ error: "Server error" });
  }
}
export async function endGameController(req, res) {
  try {
    const { userName } = req.body;
    console.log(`user: ${userName}`);

    const gameDuration = await updateEndTimeOfLatest();

    if (gameDuration === null) {
      return res.status(400).send("No game time to update.");
    }

    if (!userName) {
      return res.status(400).send("Missing username.");
    }

    console.log("Game Duration:", gameDuration);
    await addNewPlayer(userName, gameDuration);

    res.status(200).send(`Game Completed in ${gameDuration}ms`);
  } catch (err) {
    // ✅ Only catch here if you want to send an error response
    console.error("Controller error:", err);
    res.status(500).send("Server error.");
  }
}
