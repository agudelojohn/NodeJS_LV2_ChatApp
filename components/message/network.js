const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", async (req, res) => {
  const filter = {};
  if (req.query.chatId) filter.chatId = req.query.chatId;
  if (req.query.user) filter.user = req.query.user;
  const messages = await controller.getMessages(filter);
  res.send(messages);
});

router.post("/", (req, res) => {
  controller.addMessage("1", "2", "Hello W").then((msg) => {
    console.log(msg);
    res.status(200).send(msg);
  });
});

module.exports = router;
