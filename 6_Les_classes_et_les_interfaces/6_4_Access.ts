// class Mother {
//     // private name:string;
//     // private hair: string;
//     // private eyes: number;

//     constructor(public name:string,private hair:string, protected eyes:number) {
//     // this.name = n;
//     // this.hair = h;
//     // this.eyes = e;
//     // }

//     private speak() {
//         console.log(`Je suis ${this.name} et j'ai des cheveux ${this.hair}!`);
//     }
//     // getter

//     getName() {
//         return this.name;
//     }

//     getHair() {
//         return this.hair;
//     }

//     // setter

//     setHairColor(newColor: string) {
//         this.hair = newColor;
//     }


// }

// class Child extends Mother {
//     getData() {
//         /*
//         Public OK
//         Private Pas accessible
//         Protected OK
//         */
//         return this.eyes;
//     }
    
//     }



// const person1 = new Mother("Rhea", "Marron", 2); // Type Mother
// // console.log(person1.getName()); // Rhea => N'importe qui peut y accéder car public
// // console.log(person1.speak()); // bloqué car privé
// // person1.setHairColor("Blue");
// // console.log(person1);
// // console.log(person1.getHair()) // Blue


// const person2 = new Child("Josh", "Dark", 2); // Type Child
// person2.getData();
// console.log(person2.getData());