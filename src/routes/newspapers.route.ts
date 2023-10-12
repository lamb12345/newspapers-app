import { Router } from "express";
import {
  GET,
  GET_ONE,
  POST,
  PUT,
  DELETE,
} from "../controllers/newspapers.controller";

const router = Router();

router.get("/", GET);
router.get("/:id", GET_ONE);
router.post("/", POST);
router.put("/:id", PUT);
router.delete("/:id", DELETE);

export default router;
