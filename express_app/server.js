 const express = require("express");

 const app = express();

 const data = require("./movies.json");

 const port = 4000;

 app.get("/", (req, res) => {
    console.log(`request from ${req.url}`);
    res.send("Server running");
 });
 app.get("/movies", (req, res) => {
    res.status(200).json(data);
 });
 app.get("/movies/:id", (req, res) => {
    const id_movie = parseInt(req.params.id);
    const movie = data.find(m => m.id === id_movie);
    res.status(200).json(movie);

 });
 app.post("/movie", (req, res) => {
    data.push(req.body);
    res.status(200).json(data);
});

 app.listen(port, () => 
console.log(`Express server listening at http://localhost:${port}`));