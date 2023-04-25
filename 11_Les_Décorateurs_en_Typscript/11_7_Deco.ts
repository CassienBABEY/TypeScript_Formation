// function methodLog(
//     target: any,
//     name: string,
//     descriptor: PropertyDescriptor){
//         console.log("Je suis dans methodLog");
//     }

// function logParam(
//     target: any,
//     name: string,
//     position: number){
//         console.log("Je suis dans logParam");
//     }

// class Person {
//     constructor(public age:number, public eyes:string, private hair: string) {}
    
//     @methodLog
//     loginMsg(@logParam minAge:number, textOne: string, textTwo: string){
//         if(this.age > 17){
//             return textOne;
//         }
//         return textTwo;
//     }
// }

// const person = new Person(19, "blue", "Black");
// console.log(person.loginMsg(17, "Inscription autorisée", "Inscirption refusée"));