// Function
// Simple function
// function sum() {
//   console.log(this);
// }
// sum();

// Method call:
// let user = {
//   name: "Pankaj",
//   id: 1234,
//   address: "Pune",
//   details: function () {
//     console.log(this);
//   },
// };
// user.details();

// Constructor Context
// function Person(name, id, address) {
//   this.name = name;
//   this.id = id;
//   this.address = address;
// }
// let user = new Person("Pankaj", 12345, "Pune");
// console.log(user.name);

// Explicit binding:
// let user = {
//   name: "Pankaj",
//   id: 123,
//   address: "Pune",
// };
// let user1 = {
//   name: "Rohit",
//   id: 456,
//   address: "Mumbai",
// };
// function getPersonDetails(gender, company) {
//   return `${this.name} ${this.id} ${this.address} ${gender}, ${company}`;
// }
// call
// console.log(getPersonDetails.call(user, "Male", "LTIMindtree"));
// console.log(getPersonDetails.call(user1, "Male"));

// apply
// console.log(getPersonDetails.apply(user, ["Male", "LTIMindtree"]));
// console.log(getPersonDetails.apply(user1, ["Male", "Infosys"]));

// bind
// let bindedFunction = getPersonDetails.bind(user, "Male", "LTIMindtree");
// console.log(bindedFunction());
