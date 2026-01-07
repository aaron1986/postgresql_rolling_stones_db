import express from "express";
import { getAlbums } from "../controllers/albums.controller.js";

const router = express.Router();

router.get("/", getAlbums);

export default router;
