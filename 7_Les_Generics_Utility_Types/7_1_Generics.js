"use strict";
// Generics
// let colors = ["red","blue","green"]; // string[]
// let colors2 = []; // any[]
// let colors3: Array<string> = []; // string[]
// // colors3 = ["red","blue",200] // Erreur numbre != string
// function identity<T extends {title: string}>(arg:T): T {
//     return arg;
// }
// let output1 = identity<string>("Hello"); // string
// let output2 = identity(200); // number
// let output3 = identity(true); // boolean
// let output4 = identity({title: "HelloWorld"}) // {title: string}
// console.log(typeof output1); // Hello;
// console.log(typeof output2); // Hello);
// console.log(typeof output3); // Hello);
// console.log(typeof output4); // Hello);
// const objOne = {name:"Bart"}; 
// const objTwo = {age:8};
// function objInArray<N extends {name: string}, A extends {age: number}>(n: N, a: A) {
//     let data: Array<Object> = [];
//     data.push(n, a);
//     return data;
// }
// console.log(objInArray(objOne, objTwo));
