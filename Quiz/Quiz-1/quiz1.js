// bagian 1
// function mengganti karakter pada string
function changeChar(str, char, replaceChar) {
    var newStr = '';
    for(var i=0; i<str.length; i++){
        if(str[i] === char){
            newStr += replaceChar;
            
        }else{
            newStr += str[i];
        }
    }
    return newStr;
}
var sentence = "Pada Hari Minggu ku turut ayah ke kota";

console.log(changeChar(sentence, 'a', 'o'));

// bagian 2

function sortGrade(arr){
    var temp;
    for(var i=0; i<arr.length; i++){
        for(var j=0; j<arr.length; j++){
            if(arr[i][2] > arr[j][2]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

var studentData = [
	[2, "John Duro", 60],
	[4, "Robin Ackerman", 100],
	[1, "Jaeger Marimo", 60],
	[6, "Zoro", 80],
	[5, "Zenitsu", 80],
	[3, "Patrick Zala", 90],
];

var sortedData = sortGrade(studentData);
console.log(sortedData)