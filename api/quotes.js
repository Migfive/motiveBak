import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const respuesta = await fetch("https://zenquotes.io/api/random");
    const data = await respuesta.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo la frase" });
  }
}
