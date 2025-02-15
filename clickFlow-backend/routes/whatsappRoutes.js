const express = require("express");
const whatsappController = require("../controllers/whatsappController");
const router = express.Router();

// router.get('/', getUsers);

router.post("/addWhatsappNumber", whatsappController.addWhatsappNumber);
router.post("/editWhatsappNumber/:id", whatsappController.editWhatsappNumber);
router.get("/fetchWhatsappNumbers", whatsappController.fetchWhatsappNumbers);


module.exports = router;
