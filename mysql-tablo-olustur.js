var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sifre",
  database: "veritabani"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Bağlantı Sağlandı!");
  var sql = "CREATE TABLE tablo (id INT AUTO_INCREMENT PRIMARY KEY, isim VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Tablo oluşturuldu!");
  });
});
