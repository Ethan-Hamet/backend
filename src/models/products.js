const db = require("../database");

//Create a table for products in the database if it doesn't exist at application start
!async function createTable() {
    const tableQuery = `CREATE TABLE IF NOT EXISTS Employee (
        id INT PRIMARY KEY AUTO_INCREMENT,
        fullname VARCHAR(255) NOT NULL,
        functions VARCHAR(255) NOT NULL)`;
   
    await db.query(tableQuery);    
}();

exports.findAll = async function () {
    const results = await db.query("SELECT * FROM Employee");
    return results[0];
}


exports.create = async function (fullname, functions) {
    await db.query("INSERT INTO Employee(fullname, functions) VALUES (?, ?)", [fullname, functions]);
}

