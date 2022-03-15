const readBooksPromise = require('./promise.js')
 
const books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

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