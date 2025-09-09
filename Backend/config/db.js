const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "nodereact", // tên DB của bạn
  connectionLimit: 5
});

module.exports = pool;
