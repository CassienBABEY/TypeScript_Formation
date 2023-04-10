"use strict";
// function Buildname(firstName: string, lastName: string) {
//     return firstName + " " + lastName;
// }
// let result_1 = Buildname("Bob"); // s'attend à 2 arguments => TS prévient d'une potentielle erreur
// console.log(result_1) // Undefined
// let result_2 = Buildname("Bob", "Lennon","Salut"); // 2 args mais 3 donnés. Pas d'erreur en JS.
// console.log(result_2) // marche et ignore "salut"
// let result_3 = Buildname("Bob", "Lennon")
// console.log(result_3) // marche retourne Bob Lennon
// Détection TS :
// function Buildname(firstName: string, lastName?: string) {
//     return firstName + " " + lastName;
// }
// let result_1 = Buildname("Bob"); 
// console.log(result_1) // result = Bob Undefined
// autre méthode :
// function Buildname(firstName: string, lastName?: string) {
//     if (lastName) return firstName + " " + lastName;
//     else return firstName;
//     }
// let result_1 = Buildname("Bob"); 
// console.log(result_1) // result = Bob 
// let result_2 = Buildname("Bob", "Lennon"); 
// console.log(result_2) // result = Bob Lennon
// let result_3 = Buildname("Bob", "Lennon", "salut"); // Erreur
// console.log(result_3) // Que les 2 premiers pris en considération
// Avec 2e arg facultatif avec valeur par défaut :
// function Buildname(firstName: string, lastName = "Smith") {
//     return firstName + " " + lastName;
//     }
// let result_1 = Buildname("Bob"); 
// console.log(result_1) // result = Bob Smith
// let result_2 = Buildname("Bob", "Lennon"); 
// console.log(result_2) // result = Bob Lennon
// let result_3 = Buildname("Bob", "Lennon", "salut"); // Erreur mais fonctionne
// console.log(result_3) // Que les 2 premiers pris en considération
// Exemple différence arg obligatoire vs facultatif :
// function Buildname(firstName = "Will", lastName?: string) {
//         return firstName + " " + lastName;
// }
// let result_1 = Buildname("Bob", "Lennon"); // fonctionne
// console.log(result_1) // result = Bob Lennon
// let result_2 = Buildname("Bob", "Lennon", "salut"); // Erreur mais fonctionne
// console.log(result_2) // Que les 2 premiers pris en considération
// let result_3 = Buildname("Bob"); // 1 arg au lieu de 2 + pas d'arg2 pour TS. TS error - JS ok. Solvable avec le ? avant lastName
// console.log(result_3) // result = Bob Undefined
// let result_4 = Buildname(undefined, "Lennon"); // fonctionne
// console.log(result_4) // result = Will Lennon
