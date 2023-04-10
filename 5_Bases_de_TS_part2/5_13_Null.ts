/* let myName; // Any

console.log(myName); // Undefined

myName = null;

console.log(myName); // Null

// Undefined vs Null

console.log(undefined === null); // False

console.log(undefined == null); // True : se ressemble

// typeof

console.log(typeof undefined); // Undefined

console.log(typeof null); // Object

// !

console.log(null); // Null

console.log(!null); // True :  négation du null

console.log(!!null); // false : négation de la négation de null

// return undefined | null

const myFunc = function foo(arg:string): string|null|undefined {
    return arg;
}

const result = myFunc("Hello");
if(result != null) {
    console.log(typeof result); // "string"
}


console.log(null + 200); // JS Ok - TS Error
// Rien + 200 = 200

const element = document.querySelector("elementFictif");
console.log(element); // Null)

console.log(undefined + 200); // Inconnu + 200 ? error NaN

const users: any = {};
console.log(users.age); // Undefined */

// let value: number; // TS type number
// console.log(value); // Undefined

// let value1: undefined; // TS type undefined
// console.log(value1); // Undefined

// let value2: null = null; // TS type null
// console.log(value2); // Null => On doit spécifier la valeur de null type insuffisant sinon undefined

// let value3: unknown | any;
// value3 = null; // maj => n'accepte plus par défaut autre que unknown ou any
// value3 = undefined;
