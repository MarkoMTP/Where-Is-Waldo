import express from "express";
import controllerCheckCharacter from "./controllers/generalController.js";
const index = express.Router();

index.get("/", (req, res) => {
  res.send("hey bitch");
});

index.get("/check/:name/:x/:y", controllerCheckCharacter);

export default index;
