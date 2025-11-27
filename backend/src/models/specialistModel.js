import pool from "../config/db.js";

export async function getAllSpecialists() {
  const [rows] = await pool.query("SELECT * FROM specialists");
  return rows;
}
