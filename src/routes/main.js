const { Router } = require("express");
const router = Router();
const {
  findAll,
  newUser,
  updateUser,
  deleteUser,
} = require("../controllers/main");

router.get("/", async (req, res) => {
  const rta = await findAll();
  res.json(rta);
});

router.post("/newUser", async (req, res) => {
  await newUser(req.body);
  res.json(req.body);
});

router.put("/updateUser/:id", async (req, res) => {
  const name = req.body.name;
  console.log(name);
  await updateUser(req.params["id"], name);
  res.json({ update_records: name });
});

router.delete("/deleteUser/:id", async (req, res) => {
  const rta = await deleteUser(req.params["id"]);
  res.json({ deleted_records: rta });
});

module.exports = router;
