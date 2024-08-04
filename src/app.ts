import express from "express";
import http from "http";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors, { CorsOptions } from "cors";
import checkJSON from "./middlewares/checkJSON";

// Express Configuration
const app = express();
const corsOptions: CorsOptions = {
  origin: [
    "*",
  ],
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(process.env.PRODUCTION ? logger("combined") : logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve("public")));
app.use(checkJSON);

// Server Configuration
const server = http.createServer(app);
const port: number = Number(process.env.PORT) || 8000;

// Route Imports
import indexRouter from "./routes/indexRouter";
import urlRouter from "./routes/urlRouter";

// Route Configuration
app.use("/", indexRouter);
app.use("/api/url", urlRouter);

// Error Handler Middleware
import errorHandler from "./middlewares/errorHandler";
app.use(errorHandler);

server.listen(port, (): void => {
  console.log("Server listening on port " + port);
});

// MongoDB Connection
import connectDB from "./config/dbConfig";
connectDB();

const closeServer = (): void => {
  server.close((): void => {
    console.log("\nProcess terminated, closing server.");
    process.exit(0);
  });
};

process.on("SIGINT", closeServer);
process.on("SIGTERM", closeServer);
process.once("SIGUSR2", closeServer);