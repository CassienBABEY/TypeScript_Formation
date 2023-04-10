// class Mother {
//     name: string;
//     eyes: number;

//     constructor(n:string, e:number) {
//         this.name = n;
//         this.eyes = e;
//     }

//     speak() {
//         console.log(`My name is ${this.name}`);
//     }
// }

// let Henri = new Mother("Henri", 2);
// console.log(Henri);
// Henri.speak();

// interface Person {
//     name: string;
//     readonly eyes: number;
//     speak(a: string): string; // type: string + return string
// }

// let Helene: Person;

// Helene = {name: "Helene", eyes: 2, speak(a:string):string{return a + ' ' + this.name}}

// const talkingPerson = (a:Person, b: string) => {
//     return a.speak(b);
// }

// const result = talkingPerson(Helene, "Hi");
// console.log(result);

// let cyclop: Person;

// cyclop = {name: "Cyclop", eyes: 1, speak(a:string):string{return a + ' ' + this.name}}
// cyclop.eyes = 2; // Readonly