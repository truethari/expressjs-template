import dotenv from "dotenv";
import swaggerJSDoc from "swagger-jsdoc";

dotenv.config();

const requiredEnvVars: Array<string | undefined> = [];

if (requiredEnvVars.some((envVar) => envVar == null)) {
  console.log(
    "Please provide all required environment variables in .env file. Please check src/config/index.ts"
  );
  throw new Error(
    "Please provide all required environment variables in .env file. Please check src/config/index.ts"
  );
}

const config = {
  api: {
    env: process.env.NODE_ENV ?? "development",
    port: process.env.API_PORT != null || 3000,
  },

  swagger: {
    projectName: "Swagger",
    apiBaseURL: process.env.API_BASE_URL ?? "",
  },

  s3: {
    endpoint: process.env.S3_ENDPOINT ?? "",
    region: process.env.S3_REGION ?? "auto",
    accessKeyId: process.env.S3_ACCESS_KEY ?? "",
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY ?? "",
    bucket: process.env.S3_BUCKET_NAME ?? "",
    publicURL: process.env.S3_PUBLIC_URL ?? "",
  },
};

export default config;

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: `${config.swagger.projectName} API`,
      version: "1.0.0",
    },
    servers: [{ url: `http://localhost:${config.api.port}` }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ["./src/routes/**/*.ts"],
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);
