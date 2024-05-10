import express from "express";
import { hello } from "../../controllers/general";

const router = express.Router();

router.get("/", hello);

export default router;
