"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const newspapers_route_1 = __importDefault(require("./routes/newspapers.route"));
const publishers_route_1 = __importDefault(require("./routes/publishers.route"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use((0, express_fileupload_1.default)({
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
}));
app.use("/newspapers", newspapers_route_1.default);
app.use("/publishers", publishers_route_1.default);
app.listen(4000);
