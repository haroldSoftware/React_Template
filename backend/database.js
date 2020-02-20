//==============================================================================

let sqlite3 = require("sqlite3");
let database = new sqlite3.Database("./database.db");

//==============================================================================

const createRegister = `CREATE TABLE IF NOT EXISTS register (
  username TEXT UNIQUE,
  password TEXT UNIQUE,
  email TEXT
)`;

//==============================================================================

database.run(createRegister, (error) => {
  if (error) {
    console.error(new Error ("Create REGISTER table failed: "), error);
  }
  else {
    console.log("Create REGISTER success");
  }
});

//==============================================================================

module.exports = database;

//==============================================================================
