"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var userRoutes_1 = __importDefault(require("./routes/userRoutes"));
var itemsRoutes_1 = __importDefault(require("./routes/itemsRoutes"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
var port = 3000;
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use("/user", userRoutes_1.default);
app.use("/item", itemsRoutes_1.default);
app.get("/", function (req, res) {
    res.send("Rent app Home page");
});
// app.use(function (err, req, res, next) {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });
app.listen(port, function () {
    console.log("App listening at http://localhost:" + port);
});
