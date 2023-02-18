import mongoose from "mongoose";
const Schema = mongoose.Schema;

const DeckSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  flashcardIds: [{ type: Schema.Types.ObjectId, ref: "Flashcard", default: [] }],
  userId: { type: String, required: true },
  createdAt: {
    type: Date, 
    default: Date.now()
  }
});

const Deck = mongoose.model("Deck", DeckSchema);

export default Deck;
