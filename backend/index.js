import express from "express";
import controllerCheckCharacter, {
  startGame,
  startGameController,
} from "./controllers/generalController.js";
const index = express.Router();

index.get("/check/:name/:x/:y", controllerCheckCharacter);

index.get("/start", startGameController);

export default index;
