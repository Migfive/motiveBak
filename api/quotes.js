import express from "express";
import fetch from "node-fetch";

const app = express(); 

app.get("/api/quotes", async(req, res)=>{
    try {
        const respuesta = await fetch("https://zenquotes.io/api/random"); 
        const data = await respuesta.json(); 
        res.set("Access-Control-Allow-Origin", "*"); 
        res.json(data); 
        
    } catch (error) {
        res.status(500).json({error: "Error getting results"})    
        
    }
})

app.listen(3000, ()=>console.log("Servidor en http://localhost:3000"))