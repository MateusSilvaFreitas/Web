const database = require('../database/database')

exports.autenticar = function(user){
    return database.query('SELECT * FROM  public."Usuario" WHERE "Email" = $1 and "Senha" = $2', [user.email, user.senha]);
}