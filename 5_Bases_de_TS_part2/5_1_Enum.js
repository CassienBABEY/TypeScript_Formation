"use strict";
// /* 
// ADMIN = 0
// MODERATOR = 1
// SUPPORT = 2
// USER_READ_ONLY = 3
// */
// // Exemple de base :
// /* const users = {
//     pseudo: "Batman",
//     level: 2,
// }
// if (users.level === 2) {
//     console.log(`
//     Bienvenue ${users.pseudo}!
//     Vous travaillez au service support
//     `)
// } */
// // Exemple 2 : on préfère garder les valeurs que définir des const
// /* const SUPPORT = 2
// const users = {
//     pseudo: "Batman",
//     level: SUPPORT,
// }
// if (users.level === SUPPORT) {
//     console.log(`
//     Bienvenue ${users.pseudo}!
//     Vous travaillez au service support
//     `) 
// } */
// // Enum
// enum Level {
//     ADMIN, // 0
//     MODERATOR, // 1
//     SUPPORT, // 2
//     USER_READ_ONLY // 3
// }
// const users = {
//     pseudo: "Batman",
//     level: Level.SUPPORT,
// }
// if (users.level === Level.SUPPORT) {
//     console.log(`
//     Bienvenue ${users.pseudo}!
//     Vous travaillez au service support
//     ${Level.SUPPORT}
//     `)
// }
// // Autre exemple Enum :
// enum Color {
//     Red = 1, // <- on peut choisir les valeurs par défaut => adapte les suivantes
//     Green,
//     Blue
// }
// let c = Color.Green
// console.log(c)
// let ColorName: string = Color[2] // <- appelez par sa valeur et non index
// console.log(ColorName)
