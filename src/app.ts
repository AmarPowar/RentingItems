import express from "express";
import userRoutes from "./routes/userRoutes";
import itemRoutes from "./routes/itemsRoutes";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/user", userRoutes);
app.use("/item", itemRoutes);

app.get("/", (req, res) => {
  res.send("Rent app Home page");
});

// app.use(function (err, req, res, next) {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
