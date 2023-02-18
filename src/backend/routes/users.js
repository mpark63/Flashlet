import express from "express";
import { factory } from "../debug.js";
import { decodeToken } from "../token.js";
import ApiError from "../model/ApiError.js";
import User from "../model/User.js";

const debug = factory(import.meta.url);
const router = express.Router();
const endpoint = "/users";

router.get(`${endpoint}/:id`, async (req, res, next) => {
  debug(`${req.method} ${req.path} called...`);
  try {
    const { id } = req.params;
    let user = await User.findById(id).populate("deckIds"); 
    if (!user) {
      await User.create({ _id: id }); 
      user = await User.findById(id).populate("deckIds"); 
    }
    debug(`Preparing the response payload...`);
    res.json({
      status: 200,
      message: `Successfully retrieved the following user!`,
      data: user,
    });
    debug(`Done with ${req.method} ${req.path}`);
  } catch (err) {
    debug(`There was an error processing ${req.method} ${req.path} `);
    next(err);
  }
});


export default router;
