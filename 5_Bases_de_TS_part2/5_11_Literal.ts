// // // Literal

// // //let

// // // let PI1 = 3.14; // type number attribué

// // // const

// // const PI = 3.14; // 3.14 attribué
// // // PI = 20; // => constante donc erreur

// // const API_KEY = 'POFOPAZDPO?XAPOD123'; // POFOPAZDPO?XAPOD123
// // const count = 200; // 200
// // const booleanValue = false; // false

// // // Literal Type

// // let PI1: 3.14; // <= assigné la valeur avec ":"
// // PI1 = 20 // erreur

// type GetResultFormat = 'getStringValue' | "getSquare"

// function total(arg1: number, arg2: number, totalversion: GetResultFormat) {
//     let result;

//     if(totalversion == "getStringValue") {
//         result = arg1.toString() + arg2.toString();
//     } else if (totalversion == "getSquare") {
//         const val = arg1 +arg2;
//         result = val**2;
//     } else {
//         result = arg1 + arg2;
//     }
//     return result;
// }

// const total1 = total(20, 10, "getStringValue"); // 2010
// console.log(total1); // 2010

// const total2 = total(20, 10, 'getstringvalue'); // erreur TS 
// console.log(total2); // 30

// const total3 = total(20, 10, 'getSquare'); // 900
// console.log(total3); // 900

