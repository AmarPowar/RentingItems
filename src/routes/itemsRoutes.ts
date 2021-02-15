import express from "express";
var router = express.Router();

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

export default router;
