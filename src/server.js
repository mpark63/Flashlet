import app from "./backend/index.js";
import * as db from "./backend/db.js";

db.connect(process.env.DATABASE_URL);
const PORT = process.env.PORT || 4567;

app.listen(PORT, () => {
  console.log(`Flashcard API at http://localhost:${PORT}/`);
});
