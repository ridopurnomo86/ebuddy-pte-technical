import express from "express";
import logger from "morgan";
import {
    errorHandler,
    errorNotFoundHandler,
} from "../middlewares/errorHandler";
import { router } from "../routes";

export const app = express();

app.set("port", process.env.PORT || 3000);

app.use(logger("dev"));

app.use("/", router);

app.use(errorNotFoundHandler);
app.use(errorHandler);
