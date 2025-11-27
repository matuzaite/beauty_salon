import { getAllSpecialists } from "../models/specialistModel.js";

export async function fetchSpecialists(req, res) {
  try {
    const specialists = await getAllSpecialists();
    res.json(specialists);
  } catch (err) {
    console.error("Error fetching specialists:", err);
    res.status(500).json({ message: "Database error" });
  }
}
