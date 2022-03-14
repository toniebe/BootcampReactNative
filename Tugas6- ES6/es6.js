// soal no 1
const golden = () => {
  console.log("this is golden!!");
};

golden();
console.log("--------------------------------");

// function es6 object literal
const newFunction = (firstname, lastname) => {
  const obj = {
    firstname: firstname,
    lastname: lastname,
    fullname: () => {
      return `${firstname} ${lastname}`;
    },
  };
  return obj;
};

const person = newFunction("William", "Imoh");
console.log(person);
person.fullname();

console.log("--------------------------------");

// soal no 3
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!",
};

const { firstName, lastName, destination, occupation, spell } = newObject;
console.log(firstName, lastName, destination, occupation);
console.log("--------------------------------");

// soal no 4
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];
//Driver Code
console.log(combined);
console.log("--------------------------------");

// soal no 5
const planet = "earth";
const view = "glass";
var before =
  "Lorem " +
  view +
  " dolor sit amet, " +
  "consectetur adipiscing elit, " +
  planet +
  " do eiusmod tempor " +
  "incididunt ut labore et dolore magna aliqua. Ut enim" +
  " ad minim veniam";
//   jawaban soal no 5
var before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`;

console.log(before);
