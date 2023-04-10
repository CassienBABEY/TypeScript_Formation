// // Héritage et polymorphisme TS

// class Mother {
//     name:string;
//     hair: string;
//     eyes: number;

//     constructor(n:string,h:string,e:number) {
//     this.name = n;
//     this.hair = h;
//     this.eyes = e;
//     }

//     speak() {
//         console.log(`Je suis ${this.name} et j'ai des cheveux ${this.hair}!`);
//     }
// }

// const person1 = new Mother("Rhea", "Marron", 2); // Type Mother
// // console.log(person1);

// // person1.speak();

// class Child extends Mother {
//     speak() {
//         console.log(`I am ${this.name} and I have ${this.hair} hair!`);
//     }

//     speakMotherLanguage() {
//         super.speak(); // Super appelle la classe parent
//     }
// }

// class Random {
//     name:string;
//     hair: string;
//     eyes: number;

//     constructor(n:string,h:string,e:number) {
//         this.name = n;
//         this.hair = h;
//         this.eyes = e;
//         }

// }

// const person2 = new Child("Patrick", "Brown", 2); // Type Child
// // console.log(person2);
// // person2.speak();
// // person2.speakMotherLanguage();

// const person3: Mother = new Child("Patrick", "Brown", 2); // Limite l'utilisation des méthodes enfants
   
// const person4: Mother = new Random("John", "Brown", 2); // Erreur car non conforme à la classe mother