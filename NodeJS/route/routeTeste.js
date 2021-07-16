const express = require("express");
const router = express.Router();
const placasService = require("../service/placaService");
const sinespApi = require('sinesp-api');


router.get("/pesquisaPlaca/:placa", async function (req, res) {
    console.log("aaaa")
  const carro = await sinespApi.search(req.params.placa);
  if (isEmpty(usuario)) {
    res.status(401);
  } else {
    res.status(200);
  }
  res.json(carro);
});

function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }

  return true;
}

module.exports = router;
