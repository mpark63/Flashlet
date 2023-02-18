import express from "express";
import ApiError from "../model/ApiError.js";
import { verifyPassword } from "../password.js";
import { createToken } from "../token.js";
import { factory } from "../debug.js";

const debug = factory(import.meta.url);
const router = express.Router();

router.post("/login", async (req, res, next) => {
  debug(`${req.method} ${req.path} called...`);
  try {
    debug(`Parse request body..`);
    const { email, password } = req.body;
    if (!email || !password) {
      throw new ApiError(
        400,
        "You must provide an email and a password to login."
      );
    }

    debug(`Find the user..`);
    // const users = await userDao.readAll({ email });
    if (users.length === 0) {
      throw new ApiError(403, "Wrong email or password!");
    }
    // Since emails are unique, there will be only one matching user
    const user = users[0];

    debug("Verify password..");
    const result = verifyPassword(password, user.password);
    if (!result) {
      throw new ApiError(403, "Wrong email or password!");
    }

    debug("Prepare the payload..");
    const token = createToken({ user: { id: user.id, role: user.role } });
    res.status(201).json({
      status: 201,
      message: `Successfully signed in!`,
      data: { name: user.name, email: user.email },
      token,
    });

    debug(`Done with ${req.method} ${req.path}`);
  } catch (err) {
    debug(`There was an error processing ${req.method} ${req.path} `);
    next(err);
  }
});

export default router;
