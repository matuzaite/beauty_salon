import { getAllServices } from "../models/serviceModel.js";

export async function fetchServices(req, res) {
  try {
    const services = await getAllServices();
    res.json(services);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Database error" });
  }
}
