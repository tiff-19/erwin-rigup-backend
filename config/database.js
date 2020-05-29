const mysql = require('mysql')

const db = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'saitama',
    password: 'Pl163178149;',
    database: 'rigdb_rev2',
    port: 3306,
    // multipleStatements: true
})
// const db = mysql.createConnection({
//     host: process.env.HOST,
//     user: 'root',
//     password: process.env.MYSQL_PASSWORD,
//     database: 'rigdb_rev2',
//     port: 3306,
//     multipleStatements: true
// })

// 35.238.37.11

module.exports = db