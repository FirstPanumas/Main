const express = require("express");
const router = express.Router();
const {
  get_user,
  post_user,
  create_user,
  update_user,
  delete_user,
} = require("../controllers/useController");
router.get("/", get_user);
router.post("/", post_user);

module.exports = router;
