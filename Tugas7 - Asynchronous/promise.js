function readBooksPromise(time, book) {
  console.log(`Saya mulai membaca ${book.name}`);
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      let sisaWaktu = time - book.timeSpent;
      if (sisaWaktu >= 0) {
        console.log(`saya sudah membaca ${book.name}, sisa waktu ${sisaWaktu}`);
        resolve(sisaWaktu);
      } else {
        console.log(`saya sudah tidak punya waktu untuk baca ${book.name}`);
        reject(sisaWaktu);
      }
    }, book.timeSpent);
  });
}

module.exports = readBooksPromise;
