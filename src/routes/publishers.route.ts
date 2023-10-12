import { Router } from "express";
import {
  GET,
  GET_ONE,
  POST,
} from "../controllers/publishers.controller";

const router = Router();

router.get("/", GET);
router.get("/:id", GET_ONE);
router.post("/", POST);

export default router;
