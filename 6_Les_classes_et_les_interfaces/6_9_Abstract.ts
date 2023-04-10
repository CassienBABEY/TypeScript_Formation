// // Abstracts

// abstract class Person {
    
//     constructor(public name: string) {} // On ne peut pas static dans constructeur

//     walk() {
//         console.log("I walk");
//     }

//     abstract updateName(name: string): void; 

// }


// class Child extends Person {
    
//     updateName(name: string) {
//         this.name = name;
//         console.log(this.name);
//     }
// }

// let Mario = new Child("Mario");
// Mario.walk();
// Mario.updateName("Maria");