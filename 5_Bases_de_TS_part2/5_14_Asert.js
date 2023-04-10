"use strict";
// // AS
// // let someValue: unknown  = "this is a string";
// // let strLen = (someValue as string).length;
// // console.log(someValue); // This is a string
// // console.log(strLen); // 16
// //angle-bracket
// // let someValue: unknown  = "this is a string";
// // let strLen = (<string>someValue).length;
// // console.log(someValue); // This is a string
// // console.log(strLen); // 16
// // Exemple
// // const firstName = document.getElementById("firstName") as HTMLInputElement;
// // console.log(typeof firstName) // Type object
// // console.log(typeof firstName.value); // type string
// // const firstName1 = document.getElementById("toto")
// // console.log(firstName1) // null
// // const age = document.getElementById("age") as HTMLInputElement;
// // console.log(typeof age.value)
// // const firstName = <HTMLInputElement>document.getElementById("firstName");
// // console.log(typeof firstName) // Type object
// // console.log(typeof firstName.value); // type string
// const firstName = document.getElementById("firstName");
// let inputValue = (firstName as HTMLInputElement).value
// let inputValue2 = (<HTMLInputElement>firstName).value;
// console.log(typeof inputValue) // Type object
// console.log(typeof inputValue2); // type string
