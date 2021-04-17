const { MODULEDECLARATION_TYPES } = require('@babel/types');

const pgp = require('pg-promisse')();
const db = pgp({
    user: 'postgres',
    password: '1234',
    host: 'localhost',
    port: '52385',
    database: 'Atv1'
});

module.exports = db;