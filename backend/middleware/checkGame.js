import findAllChars from "../queries.js";

export default async function checkGame() {
  try {
    const characters = await findAllChars();

    const foundCount = characters.filter((char) => char.isFound).length;

    if (foundCount === 3) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
    return "Server Error"; // 🔥 return, don't call res here
  }
}
