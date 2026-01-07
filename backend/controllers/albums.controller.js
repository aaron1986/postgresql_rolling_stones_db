import { fetchAlbums } from "../models/albums.model.js";

export const getAlbums = async (req, res, next) => {
  try {
    const albums = await fetchAlbums();
    res.status(200).send({ albums });
  } catch (err) {
    next(err);
  }
};
