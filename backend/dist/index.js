"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const index_js_1 = __importDefault(require("./db/index.js"));
const app_js_1 = require("./app.js");
dotenv_1.default.config({
    path: './env',
});
const PORT = process.env.PORT || 8000;
(0, index_js_1.default)()
    .then(() => {
    app_js_1.app.on("error", (err) => {
        console.log("Error", err);
        throw err;
    });
    app_js_1.app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    });
})
    .catch((err) => {
    console.log("MONGODB connection failed", err);
});
