import express from "express";
import cors from "cors";
import albumsRouter from "./routes/album.routes.js";

const app = express();

app.use(cors({
  origin: "http://127.0.0.1:5173"
}));

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).send({ status: "ok" });
});

app.use("/api/albums", albumsRouter);

export default app;

