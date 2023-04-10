"use strict";
// /* function gift(num: number) {
//     return num + 3
// }
// gift(20) // 23
// let age;
// age = gift;
// console.log('age 1',age(20)) // 23
// age = "Bonjour"; // écrase gift
// console.log('age 2', age(20)) // génère une erreur dans la console !! danger de any!! */
// // Exemple avec Function
// /* function gift(num: number) {
//     return num + 3
// }
// let age: Function;
// age = gift; // FOnctionne car function
// age = "Bonjour"; // erreur car pas function
// // La limite
// function displayClg(arg: any) {
//     console.log(arg);
// }
// age = displayClg; // pas d'erreur
// console.log('age 3', age(20)) // Undefined car function void au lieu de 20 */
// // Bonne méthode :
// /* function gift(num: number) {
//     return num + 3
// }
// let age: (num:number) => number;
// age = gift; // ok
// age = "Bonjour"; // pas le bon type
// // La limite
// function displayClg(arg: number) {
//     return arg
// }
// age = displayClg; // on doit définir l'arg + la valeur retournée
// console.log('age 3', age(20)) // Undefined car function void au lieu de 20
//  */
