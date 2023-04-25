"use strict";
// function setterLog(
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//     ) {
//         // console.log(target); // Prototype
//         // console.log(propertyKey); // setColor
//         // console.log(descriptor); // propriété du descriptor
// }
// function infosLog(
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//     ) {
//         console.log(target); // Prototype
//         console.log(propertyKey); // setColor
//         console.log(descriptor); // propriété du descriptor
// }
// class Car {
//     brand: string;
//     private color: string;
//     constructor(b: string, c: string) {
//         this.brand = b;
//         this.color = c;
//     }
//     @setterLog
//     setColor(color: string) {
//         this.color = color;
//     }
//     @infosLog
//     infos(){
//         return `Marque: ${this.brand} | Couleur: ${this.color}`;
//     }
// }
// const opel = new Car("Opel", "White");
// console.log(opel.infos());
// opel.infos = function() {
//     return"Hello"
// }
// console.log(opel.infos()); // Hello --> permit en JS
// function locked(value:boolean){
//     return function(
//         target: any,
//         propertyKey: string,
//         descriptor: PropertyDescriptor){
//             descriptor.writable = value;
//     }
// }
// class Person {
//     constructor(public eyes:string, private hair: string) {}
//     @locked(false)
//         getHairColor(){
//             return this.hair;
//         }
// }
// const person = new Person("blue", "Black");
// console.log(person.getHairColor());
// person.getHairColor = function(){
//     return "Hello";
// // }
// console.log(person.getHairColor());
// person.eyes = "brown";
// console.log(person.eyes);
