// Global Scope.
// var globalVar = "This is a global variable";
// function abc() {
//   console.log(globalVar + " from abc()");
// }
// abc();

// function someFun() {
//   console.log(globalVar + " from someFun()");
// }
// someFun();

// Function Scope.
// var functionVar = "Global Var";
// function abc() {
//   console.log(functionVar); // undefined: Because of Hoisting
//   var functionVar = "This is a function scope var";
//   console.log(functionVar);
// }
// abc();
// console.log(functionVar);

// Blocked Scope.
// function abc() {
//   if (!true) {
//     let blockVar = "This is blocked scope variable";
//     console.log(blockVar);
//   } else {
//     let blockVar;
//     console.log(blockVar);
//   }
//   //console.log(blockVar);
// }
// abc();
// let lexicalVal = "Lexical Var";
// function outer() {
//   // let lexicalVal = "Outer function";
//   function inner() {
//     // let lexicalVal = "Inner function";
//     if (true) {
//       // let lexicalVal = "Outer block";
//       if (true) {
//         //let lexicalVal = "inside block";
//         console.log(lexicalVal);
//       }
//     }
//   }
//   inner();
// }
// outer();

// Window scope:
// function abc() {
//   console.log(window.language)
// }
// abc();

// let a = "Javascript";
// let b = 10;
// function getValue() {
//   console.log(a, b); //  javascrip 10
//   a = "Java";
//   b = 30;
//   if (true) {
//     let a = "NodeJS";
//     let b = 20;
//     console.log(a, b); // NodeJS 20
//   }
//   console.log(a, b); // Java 30
// }
// getValue();
// console.log(a, b); // Java 30
