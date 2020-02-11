const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/", (req, res) => res.redirect("/home"));
app.get("/:file", (req, res) => {
  res.sendFile("pages/" + req.params.file + ".html", { root: __dirname });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
