import express from "express";
import ApiError from "../model/ApiError.js";
import Deck from "../model/Deck.js"; 
import User from "../model/User.js";

const router = express.Router();
const endpoint = "/decks";

router.get(`${endpoint}/:id`, async (req, res, next) => {
  try {
    const { id } = req.params; 
    let deck = await Deck.findById(id).populate("flashcardIds"); 
    if (!deck) {
      throw new ApiError(404, "Deck not found."); 
    }
    res.json({
      status: 200,
      message: `Successfully retrieved the following deck!`,
      data: deck,
    });
  } catch (err) {
    next(err);
  }
});

router.post(`${endpoint}`, async (req, res, next) => {
  try {
    const body = req.body; 
    let deck = await Deck.create(body); 
    await User.findByIdAndUpdate(deck.userId, { $push: { deckIds: deck._id } }); 
    res.json({
      status: 200,
      message: `Successfully created the following deck!`,
      data: deck,
    });
  } catch (err) {
    next(err);
  }
});

router.delete(`${endpoint}/:id`, async (req, res, next) => {
  try {
    const { id } = req.params; 
    let deck = await Deck.findByIdAndDelete(id); 
    await User.findByIdAndUpdate(deck.userId, { $pull: { deckIds: deck._id } }); 
    res.json({
      status: 200,
      message: `Successfully deleted the following flashcard!`,
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
    if (question) updateBody.name = name; 
    if (answer) updateBody.description = description; 
    const deck = await Deck.findByIdAndUpdate(id, updateBody); 
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
