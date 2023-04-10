// const divColors = document.getElementById("colors");

// let colors = function() {
//     console.log(arguments)
// }

// colors("green","red","orange"); // JS ok - TS 3arg vs 0 demandé


// let colors = function(arg1: string, arg2: string, arg3: string) {
//     console.log(typeof arguments) //object
//     console.log(arguments.length) // 3
//     for (let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i])
//     }
// }

// Version simplifiée : 
// let colors = function(arg1: string, arg2: string, arg3: string, arg4: string) {
//     for (let i in arguments) {
//         console.log(arguments[i])
//     }
// }

// colors("List 1:","green","red","orange"); // JS OK - TS OK
// colors("List 2:","blue","black","pink")

// affichage avec html : 

// let colors = function(arg1: string, ...restOfColors: string[]) {
//     console.log(restOfColors);
//     console.log(arguments.length); //4

//     const h1 = document.createElement('H1');
//     h1.innerHTML = `Titre : ${arg1}`;
//     divColors.appendChild(h1);

//     const ul = document.createElement('ul');

//     for (let i in restOfColors) {
//         console.log(restOfColors[i])
//         let li = document.createElement('li');
//         li.innerHTML = restOfColors[i];
//         ul.appendChild(li);
//     }

//     divColors?.appendChild(ul);
// }

// colors("List 1:","green","red","orange"); // arg, Rest ["green","red","orange"]
// colors("List 2:","blue","black","pink")

// Exemple doc

// function Buildname(firstName: string, ...restOfName: string[]) {
//     return firstName + " " + restOfName.join(" ");
// }

// let buildNameFun: (fnam: string, ...rest: string[])=> string = Buildname;

// // check

// function sum(sum1: number, sum2: number) {
//     return sum1 + sum2;
// }

// buildNameFun = sum; // TS error car ne correspond au type prédéfini

// solution :

// function Sum(sum1: string, ...sum2: string[]) {
//     return sum1 + sum2;
// }

// buildNameFun = Sum; // Plus d'erreur