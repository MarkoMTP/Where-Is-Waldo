import { addNewStartTime, resetGameCharacters } from "../queries.js";

export async function startGame() {
  try {
    await resetGameCharacters();
    await addNewStartTime();
  } catch (err) {
    console.error(err);
  }
}
