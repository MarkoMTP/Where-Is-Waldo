import express from "express";
const index = express.Router();

index.get("/", (req, res) => {
  res.send("hey bitch");
});

export default index;
