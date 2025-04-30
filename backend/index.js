import express from "express";
import controllerCheckCharacter, {
  endGameController,
  startGameController,
} from "./controllers/generalController.js";
const index = express.Router();

index.get("/check/:name/:x/:y", controllerCheckCharacter);

index.get("/start", startGameController);

index.post("/end", endGameController);

export default index;
