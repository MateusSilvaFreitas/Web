const authData = require('../data/authData.js');

exports.autenticar = function(user) {
    return authData.autenticar(user);
}
