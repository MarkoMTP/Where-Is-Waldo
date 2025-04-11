import findAllChars from "../queries";

export default async function controllerCheckCharacter(req, res) {
  try {
    const { name, relativeX, relativeY } = req.body;

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
      return res.status(200).send(`${name} has been Found`);
    } else {
      return res.status(200).send("Name matched but coordinates no");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}
