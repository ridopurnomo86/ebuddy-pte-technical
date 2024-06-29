import express from "express";
import logger from "morgan";
import { errorHandler, errorNotFoundHandler } from "../entities/ApiError";
import { router } from "../routes/userRoutes";

export const app = express();

app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(logger("dev"));

app.use("/", router);

app.use(errorNotFoundHandler);
app.use(errorHandler);
