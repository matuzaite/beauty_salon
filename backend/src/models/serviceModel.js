import pool from "../config/db.js";

export async function getAllServices() {
  const [rows] = await pool.query("SELECT * FROM services");
  return rows;
}
