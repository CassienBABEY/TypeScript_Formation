"use strict";
// let car = {
//     color: 'red',
//     date: 2020,
//     speed: 500
// } // Object <- définit par inférence
// let cart: {
//     color: string;
//     date: number;
//     speed: number;
// } // Type Object
// let bus: {
//     color: string;
//     date: number;
//     speed: number;
// } =  {
//     color: 'red',
//     date: 2020,
//     speed: 500
// } // On attribue un type object à l'objet ==> fais auto par TS
// /* 
// car.color = "orange"; <- possible
// car.color = 20; <- pas possible 
// */
// /* car.options = ['GPS','ABS']; // n'existe pas car non défini */
// /* car = {
//     color: 'blue',
//     date: 2020,
//     speed: 500
//     options: ['gps'] <-- pas possible
// } */
// /* let voiture: object = {
//     color: 'blue',
//     date: 2020,
//     speed: 500,
// } ==> ne permet pas d'accéder à l'intérieur voiture.color par ex
//  */
// // Solution
// let voit: {
//     color: string;
//     date: number;
//     speed: number;
// } = {
//     color: 'blue',
//     date: 2020,
//     speed: 500
// }
// /* Permet l'accès voit.color */
// // Conlusions
// /* On préfère laisser TS faire l'inférence plutôt que de préciser les types*/
