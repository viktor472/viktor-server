const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

//---------------------
router.get("/", userController.getUser);
router.get("/:id", userController.getUserid);
router.post("/", userController.createUser);
router.put("/:id", userController.uppdateUser);
router.delete("/:id", userController.removeUser);
//----------------------

module.exports = router;
