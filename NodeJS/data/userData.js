const database = require('../database/database')

exports.saveUser = function(user){
    return database.one('INSERT INTO public."Usuario"("Nome", "Email", "Senha", "Telefone") values ($1, $2, $3, $4) returning * ',
    [user.nome, user.email, user.senha, user.telefone])
}
