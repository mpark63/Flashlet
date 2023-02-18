import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  deckIds: [{ type: Schema.Types.ObjectId, ref: "Deck", default: [] }],
});

const User = mongoose.model("User", UserSchema);

export default User;
