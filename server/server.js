import express from "express";
import "./config/dotenv.js";
import cors from "cors";

import phonesRouter from "./routes/phones.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/phones", phonesRouter);

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      '<h1 style="text-align: center; margin-top: 50px;">Phone-Bucket API</h1>'
    );
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
