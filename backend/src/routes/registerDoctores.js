import express from "express";
import registerDoctoresController from "../controllers/registerDoctoresController.js";
const router = express.Router();

router.route("/").post(registerDoctoresController.register)

export default router;