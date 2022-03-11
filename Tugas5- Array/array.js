// soal no 1
function range(startNum, finishNum) {
  var arr = [];
  if (finishNum === undefined) {
    arr.push(-1);
  }
  if (startNum < finishNum) {
    for (var i = startNum; i <= finishNum; i++) {
      arr.push(i);
    }
  } else {
    for (var i = startNum; i >= finishNum; i--) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(range(1, 10)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)); // -1
console.log(range(11, 18)); // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)); // [54, 53, 52, 51, 50]
console.log(range()); // -1
console.log("----------------------------");

// soal no 2

function rangeWithStep(startNum, finishNum, step) {
  var arr = [];
  if (step === undefined) {
    step = 1;
  }
  if (startNum < finishNum) {
    for (var i = startNum; i <= finishNum; i += step) {
      arr.push(i);
    }
  } else {
    for (var i = startNum; i >= finishNum; i -= step) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(rangeWithStep(1, 10, 2)); // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)); // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)); // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)); // [29, 25, 21, 17, 13, 9, 5]

console.log("----------------------------");

// soal no 3

function sum(startNum, finishNum, step) {
  var arr = [];
  if (step === undefined) {
    step = 1;
  }
  if (finishNum === undefined) {
    finishNum = startNum;
    startNum = 0;
  }
  if (startNum < finishNum) {
    for (var i = startNum; i <= finishNum; i += step) {
      arr.push(i);
    }
  } else {
    for (var i = startNum; i >= finishNum; i -= step) {
      arr.push(i);
    }
  }
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sum(1, 10)); // 55
console.log(sum(5, 50, 2)); // 621
console.log(sum(15, 10)); // 75
console.log(sum(20, 10, 2)); // 90
console.log(sum(1)); // 1
console.log(sum()); // 0

console.log("----------------------------");

// soal no 4

var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];

function dataHandling(input) {
  for (var i = 0; i < input.length; i++) {
    console.log("Nomor ID: " + input[i][0]);
    console.log("Nama Lengkap: " + input[i][1]);
    console.log("TTL: " + input[i][2] + ", " + input[i][3]);
    console.log("Hobi: " + input[i][4]);
    console.log("\n");
  }
}

dataHandling(input);
console.log("----------------------------");

// soal no 5

function balikKata(kata) {
  var balik = "";
  for (var i = kata.length - 1; i >= 0; i--) {
    balik += kata[i];
  }
  return balik;
}

console.log(balikKata("Kasur Rusak")); // kasuR rusaK
console.log(balikKata("SanberCode")); // edoCrebnaS
console.log(balikKata("Haji Ijah")); // hajI ijaH
console.log(balikKata("racecar")); // racecar
console.log(balikKata("I am Sanbers")); // srebnaS ma I

console.log("----------------------------");

// soal no 6
var input = [
  "0001",
  "Roman Alamsyah",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

// var input = ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]

function dataHandling2(input) {
  input.splice(1, 1, "Roman Alamsyah Elsharawy");
  input.splice(2, 1, "Provinsi Bandar Lampung");
  input.splice(4, 1, "Pria", "SMA Internasional Metro");
  console.log(input);
  var tanggal = input[3].split("/");
  switch (tanggal[1]) {
    case "01":
      tanggal[1] = "Januari";
      break;
    case "02":
      tanggal[1] = "Februari";
      break;
    case "03":
      tanggal[1] = "Maret";
      break;
    case "04":
      tanggal[1] = "April";
      break;
    case "05":
      tanggal[1] = "Mei";
      break;
    case "06":
      tanggal[1] = "Juni";
      break;
    case "07":
      tanggal[1] = "Juli";
      break;
    case "08":
      tanggal[1] = "Agustus";
      break;
    case "09":
      tanggal[1] = "September";
      break;
    case "10":
      tanggal[1] = "Oktober";
      break;
    case "11":
      tanggal[1] = "November";
      break;
    case "12":
      tanggal[1] = "Desember";
      break;
    default:
      tanggal[1] = "";
      break;
  }
  console.log(tanggal[1]);

  var tanggal2 = input[3].split("/");
  tanggal2 = tanggal2.sort(function (a, b) {
    return b - a;
  });
  console.log(tanggal2);
  var tanggal3 = tanggal.join("-");
  console.log(tanggal3);
  var nama = input[1].slice(0, 15);
  console.log(nama);
}

dataHandling2(input);
