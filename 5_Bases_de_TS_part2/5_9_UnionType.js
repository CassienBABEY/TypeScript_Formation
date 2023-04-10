"use strict";
// // Union type
// //Var
// let firstName: string | number | boolean = "Roger";
// firstName = 200; 
// firstName = true; 
// // Array
// let names: (string | number |boolean)[] = [];
// names = ['test', 400, true];
// // Function
// /* function sum(arg1:number, arg2: number) {
//     return arg1 + arg2;
// }
// console.log(sum(20,40)); // 60
// console.log(sum("hello",40)); // Error type => hello40
//  */
// function concatenate(arg1:number |string, arg2: number |string) {
//     let results;
//     if (typeof arg1 === "number" && typeof arg2 === "number") {
//         results = arg1 + arg2 // number
//     } else if (typeof arg1 === "string" && typeof arg2 === "string") {
//         results = arg1 + arg2; // string
//     } else {
//         results = arg1.toString() + arg2.toString(); //string 
//     }
//     return results
// }
// console.log(concatenate(20,30)); // 50
// console.log(concatenate("Hello",20)) // Hello20
// console.log(concatenate("John","Cena")); // JohnCena
// console.log(concatenate(20, "Hello")) // 20Hello
