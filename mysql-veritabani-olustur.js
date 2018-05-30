var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sifre"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Bağlantı Sağlandı!");
  con.query("CREATE DATABASE veritabani", function (err, result) {
    if (err) throw err;
    console.log("Veritabanı oluşturuldu!");
  });
});
