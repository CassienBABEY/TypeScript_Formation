// interface HumanSounds {

//     talk(): string;
// }

// interface AlienSounds {

//     telepathy(): string;
// }


// class Person implements HumanSounds {
//     constructor(readonly name: string, private age:number){}

//     talk() {
//         return `Je m'appelle ${this.name}`;
//     }
// }


// class Alien implements AlienSounds {
//     constructor(readonly name: string, private age:number){}

//     telepathy() {
//         return `Je m'appelle ${this.name}. Je suis un ado de ${this.age} ans.`}
// }

// // let homer = new Person("homer", 43);
// // console.log(homer);

// // let roger = new Alien("roger", 1432);
// // console.log(roger);
// // console.log(roger.telepathy());

// // // let humans: HumanSounds; // Type Interface Humansounds
// // // humans = homer; // OK car person contient humansounds
// // // humans = roger; // NE remplit pas les prérequis

// // let humanMembers: HumanSounds[] = [];
// // humanMembers.push(homer) // OK
// // //humanMembers.push(roger); // NE remplit pas conditions
// // console.log(humanMembers);

// const form = document.getElementById("signupForm") as HTMLFormElement;
// const firstName = document.getElementById("firstName") as HTMLInputElement;
// const age = document.getElementById("age") as HTMLInputElement;
// const species = document.getElementById("species") as HTMLSelectElement;

// form.addEventListener("submit", (e: Event) => {
//     e.preventDefault();

//     let humanUser: HumanSounds;
//     let alienUser: AlienSounds;
    
//     if(species.value === "human") {
//         humanUser = new Person(firstName.value, age.valueAsNumber);
//         console.log(humanUser, humanUser.talk());
//     } else {
//         alienUser = new Alien(firstName.value, age.valueAsNumber);
//         console.log(alienUser, alienUser.telepathy());
//     }
// })

