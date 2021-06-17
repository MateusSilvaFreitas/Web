const express = require('express');
const router = express.Router();
const userService = require('../service/userService')

router.post('/user', async function(req, res) {
    const user = req.body;
    const newUser = await userService.saveUser(user);
    res.json(newUser)
});

module.exports = router;