// db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Sửa thành thông tin của bạn
  password: '',
  database: 'asm-agl'
});

db.connect(err => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + db.threadId);
});

module.exports = db;
