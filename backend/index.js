import express from "express";
import urls from "./routes/users.js";
import decks from "./routes/deck.js";
import flashcards from "./routes/flashcard.js"; 
import cors from "cors";
import { factory } from "./debug.js";

const debug = factory(import.meta.url);
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  debug(`${req.method} ${req.path} called...`);
  res.send("Welcome to the Flashcard API!");
});

app.use(urls);
app.use(decks);
app.use(flashcards);

app.use((err, req, res, next) => {
  if (err) {
    debug(err);
    const code = err.status || 500;
    res.status(code).json({
      status: code,
      message: err.message || `Internal Server Error!`,
    });
  }
  next();
});

export default app;
