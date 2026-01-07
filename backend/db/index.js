import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "aaron",
  host: "localhost",
  database: "rolling_stones_db",
  password: "pinkballs12",
  port: 5432,
});

export default pool;
