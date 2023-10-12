import { Router } from "express";
import {
  GET,
  POST,
} from "../controllers/publishers.controller";

const router = Router();

router.get("/", GET);
router.post("/", POST);

export default router;
