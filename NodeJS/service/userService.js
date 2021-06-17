const userData = require('../data/userData');

exports.saveUser = function(user) {
    return userData.saveUser(user);
}