import express from "express";
import registerCitasController from "../controllers/registerCitasController.js";
const router = express.Router();

router.route("/").post(registerCitasController.register)

export default router;