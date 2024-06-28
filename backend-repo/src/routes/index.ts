import { Router } from "express";
import * as controller from "../controllers/api";

export const router = Router();

router.get("/", controller.index);
router.get("/fetch-user-data", controller.fetchUser);
