const express = require('express');
const router = express.Router();
const authService = require('../service/authService')

router.post('/autenticar', async function(req, res) {
    const usuario = await authService.autenticar(req.body);
    if(isEmpty(usuario)){
        res.status(401)
    } else {
        res.status(200)
    }
    res.json(usuario)
});

function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}

module.exports = router;