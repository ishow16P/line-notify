const router = require("express").Router();
const { getImage } = require('../../controllers/images.controller')

router.post("/images", getImage);


module.exports = router;
