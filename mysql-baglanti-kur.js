var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sifre*"
});

var baglan = con.connect(function(err) {
  if (err) throw err;
  console.log("Bağlantı sağlandı!");
});
