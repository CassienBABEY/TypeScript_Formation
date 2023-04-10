/* // Tuples

let x: [string, number];
x = ['Hello', 20] // Toujours garder l'ordre string - number
/* x = [20, 'hello']--> Error
x = ['Hello', 20, "bonjour"] --> Error incompatible
x.push('bonjour'); <-- pas d'erreur de compatibilité mais erreur

console.log(x[0].substring(1)); // <-- élément accessible via index
console.log(x[1].substring(1)) // <-- call erreur
console.log(x[1].toString)
console.log(typeof x[1]);  */

/* x[3] = "Hello"; // ==> error car tuple = type 2
console.log(x[5].toString()) // ==> same */


/* const member = {
    level: ['admin', 1];
}

member.level[0] = 200; // --> pas d'erreur détecté car array<String | number>

console.log(member.level);  */

// const member: {
//     level: [string, number]
// } = {
//     level: ['admin', 1]
// }

//member.level[0] = "moderator"
//member.level[0] = 200 --> error */

//member.level.push('salut'); // -> pas d'erreur détectée */