const express = require("express");
const router = require("./routes/main");
const app = express();

app.use(express.json());
app.use("/api/v1", router);

app.listen(5000, () => {
  console.log("run on port 5000");
});
