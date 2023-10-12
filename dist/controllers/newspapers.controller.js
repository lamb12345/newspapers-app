"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.PUT = exports.POST = exports.GET_ONE = exports.GET = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const GET = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newspapers = yield prisma.newsPaper.findMany({
        select: {
            id: true,
            link: true,
            abstract: true,
            creationDate: true,
            title: true,
            publisher: {
                select: {
                    id: true,
                    names: true,
                    joinedDate: true,
                },
            },
        },
    });
    return res.status(200).json({ message: "all news papers", newspapers });
});
exports.GET = GET;
const GET_ONE = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).json({ message: "GET ONE NEWS PAPER" });
});
exports.GET_ONE = GET_ONE;
const POST = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(201).json({ message: "CREATE A NEWSPAPER" });
});
exports.POST = POST;
const PUT = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).json({ message: "UPDATE A NEWSPAPER" });
});
exports.PUT = PUT;
const DELETE = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(201).json({ message: "DELETE A NEWSPAPER" });
});
exports.DELETE = DELETE;
