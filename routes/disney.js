import express from "express";

import {
    criarDisney,
    listarDisney,
    buscarDisneyPorId,
    atualizarDisney,
    deletarDisney
} from "../controllers/DisneyController.js";

const router = express.Router();


// CREATE
router.post("/", criarDisney);


// READ - listar todos
router.get("/", listarDisney);


// READ - buscar por ID
router.get("/:id", buscarDisneyPorId);


// UPDATE
router.put("/:id", atualizarDisney);


// DELETE
router.delete("/:id", deletarDisney);


export default router;