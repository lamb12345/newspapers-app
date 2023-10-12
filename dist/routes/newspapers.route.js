"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const newspapers_controller_1 = require("../controllers/newspapers.controller");
const router = (0, express_1.Router)();
router.get("/", newspapers_controller_1.GET);
router.get("/:id", newspapers_controller_1.GET_ONE);
router.post("/", newspapers_controller_1.POST);
router.put("/:id", newspapers_controller_1.PUT);
router.delete("/:id", newspapers_controller_1.DELETE);
exports.default = router;
