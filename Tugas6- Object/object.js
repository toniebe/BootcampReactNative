// soal no 1

var now = new Date();
var thisYear = now.getFullYear(); // 2021 (tahun sekarang)
console.log(thisYear);

function arrayToObject(arr) {
  var resultObject = {};
  for (var i = 0; i < arr.length; i++) {
    var obj = {};
    var hasilYear = thisYear - arr[i][3];
    if (!arr[i][3] || hasilYear < 0) {
      hasilYear = "Invalid Birth Year";
    }
    obj["firstname"] = arr[i][0];
    obj["lastname"] = arr[i][1];
    obj["gender"] = arr[i][2];
    obj["age"] = hasilYear;
    resultObject[i + 1 + ". " + arr[i][0] + " " + arr[i][1]] = obj;
  }
  console.log(resultObject);
}

// Driver Code
var people = [
  ["Bruce", "Banner", "male", 1975],
  ["Natasha", "Romanoff", "female"],
];
arrayToObject(people);

var people2 = [
  ["Tony", "Stark", "male", 1980],
  ["Pepper", "Pots", "female", 2023],
];
arrayToObject(people2);

console.log("--------------------------------");

// soal no 2
function shoppingTime(memberId, money) {
  if (!memberId) {
    return "Mohon Maaf, toko X hanya berlaku untuk member saja";
  } else if (!money) {
    return "Mohon Maaf, uang tidak cukup";
  } else {
    var result = {};
    var listBarang = [
      ["Sepatu Stacattu", 1500000],
      ["Baju Zoro", 500000],
      ["Baju H&N", 250000],
      ["Sweater Uniklooh", 175000],
      ["Casing Handphone", 50000],
    ];
    var listBarang2 = [
      ["Baju Zoro", 500000],
      ["Baju H&N", 250000],
      ["Sweater Uniklooh", 175000],
      ["Casing Handphone", 50000],
    ];
    var listBarang3 = [["Casing Handphone", 50000]];
    var listBarang4 = [
      ["Casing Handphone", 50000],
      ["Baju Zoro", 500000],
      ["Baju H&N", 250000],
      ["Sweater Uniklooh", 175000],
    ];
    var listBarang5 = [
      ["Casing Handphone", 50000],
      ["Baju Zoro", 500000],
      ["Baju H&N", 250000],
      ["Sweater Uniklooh", 175000],
      ["Sepatu Stacattu", 1500000],
    ];
    var listBarang6 = [
      ["Sepatu Stacattu", 1500000],
      ["Baju Zoro", 500000],
      ["Baju H&N", 250000],
      ["Sweater Uniklooh", 175000],
      ["Casing Handphone", 50000],
    ];
    var listBarang7 = [
      ["Sepatu Stacattu", 1500000],
      ["Baju Zoro", 500000],
      ["Baju H&N", 250000],
      ["Sweater Uniklooh", 175000],
      ["Casing Handphone", 50000],
      ["Baju Zoro", 500000],
      ["Baju H&N", 250000],
      ["Sweater Uniklooh", 175000],
      ["Casing Handphone", 50000],
    ];

    result["memberId"] = memberId;
    result["money"] = money;
    if (money >= 1000000) {
      result["listPurchased"] = listBarang;
    } else if (money >= 750000) {
      result["listPurchased"] = listBarang2;
    } else if (money >= 50000) {
      result["listPurchased"] = listBarang3;
    } else if (money >= 250000) {
      result["listPurchased"] = listBarang4;
    } else if (money >= 1500000) {
      result["listPurchased"] = listBarang5;
    } else if (money >= 1000000) {
      result["listPurchased"] = listBarang6;
    } else if (money >= 750000) {
      result["listPurchased"] = listBarang7;
    } else {
      return "Mohon Maaf, uang tidak cukup";
    }
    var totalBelanja = 0;
    for (var i = 0; i < result["listPurchased"].length; i++) {
        totalBelanja += result["listPurchased"][i][1];
    }
    result["changeMoney"] = money - totalBelanja;
    if(result["changeMoney"] < 0){
        return "Mohon Maaf, uang tidak cukup";
    }
    return result;
  }
}

console.log(shoppingTime("1820RzKrnWn08", 2475000));
console.log(shoppingTime("82Ku8Ma742", 170000));
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

console.log("--------------------------------");
// soal no 3

function naikAngkot(arrPenumpang) {
    rute = ["A", "B", "C", "D", "E", "F"];
    var result = [];
    for (var i = 0; i < arrPenumpang.length; i++) {
        var obj = {};
        obj["penumpang"] = arrPenumpang[i][0];
        obj["naikDari"] = arrPenumpang[i][1];
        obj["tujuan"] = arrPenumpang[i][2];
        obj["bayar"] = 0;
        for (var j = 0; j < rute.length; j++) {
            if (arrPenumpang[i][1] === rute[j]) {
                obj["bayar"] += 2000;
            }
            if (arrPenumpang[i][2] === rute[j]) {
                obj["bayar"] += 2000;
            }
        }
        result.push(obj);
    }
    return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
console.log(naikAngkot([])) //[]


console.log("--------------------------------");