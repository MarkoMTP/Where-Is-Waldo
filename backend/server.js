import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import index from "./index.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", index);

const PORT = process.env.PORT || 12345;
console.log("Connected to:", process.env.DATABASE_URL);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app; //
