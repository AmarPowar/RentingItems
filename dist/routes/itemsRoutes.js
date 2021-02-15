"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get("/items", function (req, res) {
    res.send("items path ");
});
router.post("/addItems", function (req, res) {
    res.send("items path ");
});
router.put("/updateItems", function (req, res) {
    res.send("items path ");
});
router.put("/deleteItems", function (req, res) {
    res.send("items path ");
});
exports.default = router;
