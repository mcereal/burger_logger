const mysql = require("mysql");
let connection;
const JAWSDB_URL =
  "mysql://rdw46xmkzobzguaj:kpqk9s5p0yl4x3wi@de1tmi3t63foh7fa.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/md2r7rektosrt1bb";

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db",
  });
}

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
