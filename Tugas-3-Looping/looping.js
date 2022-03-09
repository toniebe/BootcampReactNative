// soal no 1
console.log("LOOPING PERTAMA");
var x = 2;
while (x <= 20) {
  console.log(x + " - I love Coding");
  x += 2;
}

console.log("LOOPING KEDUA");
var y = 20;
while (y >= 2) {
  console.log(y + " - I will become mobile developer");
  y -= 2;
}

console.log("----------------------------");

// soal no 2

for(let i = 1; i <= 20; i ++) {
  if(i % 3 === 0 && i % 2 === 1) {
    console.log(i + " - I Love Coding");
  } else if (i % 2 === 0) {
    console.log(i + " - Berkualitas");
  } else {
    console.log(i + " - Santai");
  }
}

console.log("----------------------------");
// soal no 3
var result ="" ;
for(let i = 0; i < 4; i ++) {
  for(let j = 0; j < 8; j ++) {
    result += "#";
  }
  result += "\n";
}
console.log(result);

// soal no 4
console.log("----------------------------");

var result = "";
for(let i = 0; i <= 7; i ++) {
  for(let j = 0; j < i; j ++) {
    result += "#";
  }
  result += "\n";
}

console.log(result);

// soal no 5
console.log("----------------------------");
var result = "";
for(let i = 0; i < 8; i ++) {
  for(let j = 0; j < 8; j ++) {
    if ((i+j) % 2 === 0) {
      result += " ";
    } else {
      result += "#";
    }
  }
  result += "\n";
}

console.log(result);
