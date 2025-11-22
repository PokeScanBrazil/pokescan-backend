import express from "express";
import { findOrCreateCard } from "../controllers/card.controller.js";

const router = express.Router();

router.post("/", findOrCreateCard);

export default router;
