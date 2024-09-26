// class Person {
//   constructor() {
//     this.firstName = "Sachin";
//     this.lastName = "Tendulkar";
//   }
// }
// const player = new Person();
// console.log(player.firstName);
// console.log(player.lastName);

// class Person {
//   constructor(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//   }
// }
// const player = new Person("Rohit", "Sharma");
// console.log(player.firstName);
// console.log(player.lastName);

// [
//   {
//     firstName: "",
//     lastName: "",
//     runs: 0,
//     contry: "",
//     "100s": "",
//     "50s": "",
//     age: 0,
//     battinStyle: "",
//     bowlingStyle: "",
//   },
// ];

class Player {
  constructor(
    first,
    last,
    runs,
    country,
    hundreds,
    fifties,
    age,
    battingStyle,
    matches,
    totalNotOuts = 10
  ) {
    this.firstName = first;
    this.lastName = last;
    this.matches = matches;
    this.runs = runs;
    this.country = country;
    this.hundreds = hundreds;
    this.fifties = fifties;
    this.age = age;
    this.battingStyle = battingStyle;
    this.totalNotOuts = totalNotOuts;
  }
  getFullName = () => {
    return `${this.firstName} ${this.lastName}`;
  };

  getAverage = () => {
    return this.runs / (this.matches - this.totalNotOuts);
  };

  get getHundreds() {
    return this.hundreds;
  }

  set setRuns(runs) {
    if (runs < this.runs) {
      throw new Error("Runs should not be less than the actual runs");
    } else {
      this.runs = runs;
    }
  }
  set setHundreds(hundreds) {
    if (hundreds < this.hundreds) {
      throw new Error("Hundreds should not be less than the actual hundreds");
    } else {
      this.hundreds = hundreds;
    }
  }
  set setFifties(fifties) {
    if (fifties < this.fifties) {
      throw new Error("Fifties should not be less than the actual fifties");
    } else {
      this.fifties = fifties;
    }
  }
}

const p1 = new Player(
  "Rohit",
  "Sharma",
  10987,
  "India",
  31,
  66,
  36,
  "Right Handed",
  249,
  35
);
const p2 = new Player(
  "Virat",
  "Kohli",
  13976,
  "India",
  50,
  86,
  36,
  "Right Handed",
  340,
  97
);
const p3 = new Player(
  "Sachin",
  "Tendulkar",
  18976,
  "India",
  49,
  86,
  43,
  "Right Handed",
  476
);
// console.log(p1);
// // console.log(p2);
// // console.log(p3);
// p1.firstName = "Surya";
// p1.setHundreds = 32;
// console.log(p1.getHundreds);
// console.log(p1.getFullName());

console.log(p1.getAverage());
console.log(p2.getAverage());
console.log(p3.getAverage());
console.log(p3.totalNotOuts);
