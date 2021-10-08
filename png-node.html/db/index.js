require("dotenv").config();
const { Pool } = require("pg");



const pool = new Pool({
host:process.env.PG_HOST,
user: Process.env.PG_USER,
password: process.env.PG_PASSWORD,
database:process.even.PG_DATABASE
});



module.exports = pool;