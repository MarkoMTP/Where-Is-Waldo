import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import indexRouter from "./index.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", indexRouter);

const PORT = process.env.PORT || 12345;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app; //
