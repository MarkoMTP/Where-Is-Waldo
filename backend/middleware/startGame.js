import { addNewStartTime, resetGameCharacters } from "../queries";

export async function startGame() {
  try {
    await resetGameCharacters();
    await addNewStartTime();
  } catch (err) {
    console.error(err);
  }
}
