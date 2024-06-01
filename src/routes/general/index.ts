import express from "express";
import { hello } from "../../controllers/general";

import sanitize from "../../middlewares/sanitize";

const router = express.Router();

/**
 * @swagger
 * /api/v1/hello:
 *   get:
 *     summary: Returns a greeting message
 *     tags:
 *       - Example Endpoints
 *     responses:
 *       200:
 *         description: Greeting message successfully retrieved
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hello, World!
 */
router.get("/hello", [sanitize], hello);

export default router;
