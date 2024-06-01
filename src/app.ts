import type { Express } from "express";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import swaggerUI from "swagger-ui-express";
import config, { swaggerSpec } from "./config";

import generalRoutes from "./routes/general";

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use("/api/v1", generalRoutes);

app.listen(config.api.port, () => {
  console.log(`[server]: Server is running at http://localhost:${config.api.port}`);
});
