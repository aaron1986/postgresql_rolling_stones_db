import db from "../db/index.js";

export const fetchAlbums = async () => {
  const { rows } = await db.query(
    `SELECT * FROM rolling_stones ORDER BY "year_released" ASC`
  );
  return rows;
};
