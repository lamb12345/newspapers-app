import { Router } from "express";

import { GET } from "../controllers/home.controller";

const router = Router();

router.get("/", GET);

export default router;
