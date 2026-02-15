const express = require("express");
const telegramController = require("../controllers/telegramController");
const router = express.Router();

// router.get('/', getUsers);

router.post("/addTelegramNumber", telegramController.addTelegramNumber);
router.post("/editTelegramNumber/:id", telegramController.editTelegramNumber);

module.exports = router;
