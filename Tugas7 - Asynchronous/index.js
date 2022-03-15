const readBooks = require("./callback.js");

const books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
];

// Tulis code untuk memanggil function readBooks di sini
function read(time, books, i) {
  if (i < books.length) {
    readBooks(time, books[i], function (sisaWaktu) {
      if (sisaWaktu > 0) {
        i += 1;
        read(sisaWaktu, books, i);
      }
    });
  }
}

read(10000, books, 0);

const readBooksPromise = require('./promise.js')
 
var panjang = books.length;
var waktu = 10000;

function execute(waktu, index, panjang) {
  readBooksPromise(waktu, books[index])
    .then(function (sisaWaktu) {
      waktu = sisaWaktu;
      panjang = panjang - 1;
      if (panjang > 0) {
        execute(waktu, index + 1, panjang);
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

execute(waktu, 0, panjang);
