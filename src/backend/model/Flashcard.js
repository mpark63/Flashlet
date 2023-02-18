import mongoose from "mongoose";
const Schema = mongoose.Schema;

const FlashcardSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  userId: { type: String, required: true },
  deckId: { type: Schema.Types.ObjectId, ref: "Deck", required: true },
});

const Flashcard = mongoose.model("Flashcard", FlashcardSchema);

export default Flashcard;
