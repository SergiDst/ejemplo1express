const express = require("express");
const router = express.Router(); //manejador de rutas de express
const animalSchema = require("../models/animal");
//Nuevo animal
router.post("/animals", (req, res) => {
    const animal = animalSchema(req.body);
    animal
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get("/animals", (req, res) => {
    animalSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.put("/animals/:id", (req, res) => {
    animalSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.delete("/animals/:id", (req, res) => {
    animalSchema.findByIdAndDelete(req.params.id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;
