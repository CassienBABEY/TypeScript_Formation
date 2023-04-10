"use strict";
// // Unknown
// let inputData: unknown; // inférence any
// // inputData = 'Hello World!'; // accepte 
// inputData = 20// accepte 
// //inputData = true// accepte 
// console.log(inputData); 
// // let inputData: unknown;
// // inputData = 'Hello World!'; // accepte 
// // inputData = 200// accepte 
// // inputData = true// accepte
// /* let inputAge: number;
// inputAge = inputData; // accepté => grosse faille car inputData = boolean
// console.log(typeof inputAge); */ 
// let inputAge: number;
// // inputAge = inputData; 
// /* avec unknown => empeche attribution tant que le type n'est pas connu 
// même si bon type en théorie
// */
// // Pour valider un type unknown :
// if (typeof inputData === 'number') {
//     //inputData est maintenant de Type number
//     inputAge = inputData // plus d'erreur
//     console.log(typeof inputAge)
// }
// /* Unknown force une vérification de type */
