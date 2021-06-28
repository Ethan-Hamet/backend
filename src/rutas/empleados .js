const express = require("express");
const productModel = require("../models/products");

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
    try {
        const usuarios = await productModel.findAll();
        res.status(200).json(usuarios);
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
});

app.post("/", async (req, res) => {
    try {
        const {fullname, functions} = req.body;
        await productModel.create(fullname, functions);
        res.status(200).json({message: "Usuario registrado"});
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
});


module.exports = app;