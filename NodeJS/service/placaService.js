const sinespApi = require("sinesp-api");

exports.verificaPlaca = function (placa) {
  return sinespApi.search(placa);
};
