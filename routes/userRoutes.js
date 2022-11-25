const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

//---------------------
router.get("/", userController.getUser);
//router.get("/:id", userController.getUserid);
router.post("/", userController.createUser);
//router.put("/:id", userController.uppdateUser);
//router.delete("/:id", userController.removeUser);
router.route("/").post(userController.createUser).get(userController.getUser);
router
  .route("/:id")
  .get(userController.getUserid)
  .put(userController.uppdateUser)
  .delete(userController.removeUser);
//----------------------

module.exports = router;
