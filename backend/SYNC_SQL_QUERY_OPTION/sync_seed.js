const fs = require("fs");

const sqlite = require("sqlite3");

const database = new sqlite3.Database("./database.db");

let sqlBuffer = fs.readFileSync("./async_query.sql");

const sqlString = sqlBuffer.toString();

database.exec(sqlString, error => {
  if (error) console.log("SQL failed", error)
  else console.log("Succeeded")
});
