import express from "express";
import controllerCheckCharacter, {
  startGame,
} from "./controllers/generalController.js";
const index = express.Router();

index.get("/start", startGame);

index.get("/check/:name/:x/:y", controllerCheckCharacter);

export default index;
