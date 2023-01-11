const { Router } = require('express');
const router = Router();
const { getToken } = require("../controllers/confirm")


router.post('/', getToken )

module.exports = router