import express from "express";
import Deck from "../model/Deck.js";
import Flashcard from "../model/Flashcard.js"; 

const router = express.Router();
const endpoint = "/flashcards";

router.get(`${endpoint}/:deckId`, async (req, res, next) => {
  try {
    const { deckId } = req.params; 
    let flashcards = await Flashcard.findByDeckId(deckId); 
    res.json({
      status: 200,
      message: `Successfully retrieved the following flashcard!`,
      data: flashcards,
    });
  } catch (err) {
    next(err);
  }
});

router.post(`${endpoint}`, async (req, res, next) => {
  try {
    const body = req.body; 
    let flashcard = await Flashcard.create(body); 
    await Deck.findByIdAndUpdate(flashcard.deckId, { $push : { flashcardIds: flashcard._id }}); 
    res.json({
      status: 200,
      message: `Successfully created the following flashcard!`,
      data: flashcard,
    });
  } catch (err) {
    next(err);
  }
});

router.delete(`${endpoint}/:id`, async (req, res, next) => {
  try {
    const { id } = req.params; 
    let flashcard = await Flashcard.findByIdAndDelete(id); 
    await Deck.findByIdAndUpdate(flashcard.deckId, { $pull : { flashcardIds: flashcard._id }}); 
    res.json({
      status: 200,
      message: `Successfully deleted the following flashcard!`,
      data: flashcard,
    });
  } catch (err) {
    next(err);
  }
});

router.patch(`${endpoint}/:id`, async (req, res, next) => {
  try {
    const { id } = req.params; 
    const { question, answer } = req.body; 
    const updateBody = {}; 
    if (question) updateBody.question = question; 
    if (answer) updateBody.answer = answer; 
    const flashcard = await Flashcard.findByIdAndUpdate(id, updateBody); 
    res.json({
      status: 200,
      message: `Successfully updated the following flashcard!`,
      data: flashcard,
    });
  } catch (err) {
    next(err);
  }
});


export default router;
