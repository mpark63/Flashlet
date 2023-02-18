import express from "express";
import ApiError from "../model/ApiError.js";
import Deck from "../model/Deck.js"; 
import User from "../model/User.js";
import Flashcard from "../model/Flashcard.js";
import { newFlashcard, sampleDeck } from "../assets.js";

const router = express.Router();
const endpoint = "/decks";

router.get(`${endpoint}/:id`, async (req, res, next) => {
  try {
    const { id } = req.params; 
    let deck = await Deck.findById(id); 
    let flashcards = await Flashcard.findByDeckId(deck._id);
    if (!deck) {
      throw new ApiError(404, "Deck not found."); 
    }
    res.json({
      status: 200,
      message: `Successfully retrieved the following deck!`,
      data: { deck, flashcards },
    });
  } catch (err) {
    next(err);
  }
});

router.post(`${endpoint}`, async (req, res, next) => {
  try {
    const body = req.body; 
    let deck = await Deck.create(body); 
    if (deck.name === "Sample Deck") {
      let samples = sampleDeck.map((f) => {
        f.userId = deck.userId; 
        f.deckId = deck._id; 
        return f; 
      }); 
      await Flashcard.insertMany(samples); 
    } else {
      newFlashcard.userId = deck.userId; 
      newFlashcard.deckId = deck._id; 
      await Flashcard.create(newFlashcard); 
    }
    await User.findByIdAndUpdate(deck.userId, { $push: { deckIds: deck._id } }, { new: true}); 
    const flashcards = await Flashcard.findByDeckId(deck._id);
    res.json({
      status: 200,
      message: `Successfully created the following deck!`,
      data: { deck, flashcards },
    });
  } catch (err) {
    next(err);
  }
});

router.delete(`${endpoint}/:id`, async (req, res, next) => {
  try {
    const { id } = req.params; 
    let deck = await Deck.findByIdAndDelete(id); 
    await User.findByIdAndUpdate(deck.userId, { $pull: { deckIds: deck._id } }, { new: true}); 
    res.json({
      status: 200,
      message: `Successfully deleted the following deck!`,
      data: deck,
    });
  } catch (err) {
    next(err);
  }
});

router.patch(`${endpoint}/:id`, async (req, res, next) => {
  try {
    const { id } = req.params; 
    const { name, description } = req.body; 
    const updateBody = {}; 
    if (name) updateBody.name = name; 
    if (description) updateBody.description = description; 
    const deck = await Deck.findByIdAndUpdate(id, updateBody, { new: true }); 
    res.json({
      status: 200,
      message: `Successfully updated the following deck!`,
      data: deck,
    });
  } catch (err) {
    next(err);
  }
});


export default router;
