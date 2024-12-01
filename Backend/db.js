const Pool = require("pg").Pool;
const pool = new Pool({
    user:"postgres",
    password:"1234",
    host:"localehost",
    port:"5432",
    database:"adera"
});

module.exports = pool;
