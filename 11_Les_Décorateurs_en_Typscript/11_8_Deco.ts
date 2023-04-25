// function changeArtist(artist: string){
//     return function(constructor: any) {
//         return class {
//             public age:number; 
//             public eyes:string;
//             public artist: string = artist;

//             loginMsg(){
//                 return "Hello"
//             }
//         }
//     }
// }


// @changeArtist("John Cena")
// class Person {
//     constructor(public age:number, public eyes:string, public artist: string) {}
    
//     loginMsg(minAge:number, textOne: string, textTwo: string){
//         if(this.age > 17){
//             return textOne;
//         }
//         return textTwo;
//     }
// }

// const person = new Person(19, "blue", "Picasso");
// console.log(person.artist);
// console.log(person.loginMsg(17, 'bleu',' Picasso'));