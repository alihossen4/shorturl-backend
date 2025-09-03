import e from "express"

import { nanoid } from "nanoid";
import validationMiddleware from "../niddlewares/validator.middleware.js";
import { Url } from "../models/url.model.js";
import { shortCode, shortenUrl } from "../controllers/url.controller.js";
const router = e.Router();

router.post("/shorten", validationMiddleware(Url), shortenUrl);

router.get("/shorCode", shortCode);

export default router;