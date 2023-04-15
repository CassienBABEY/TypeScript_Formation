// Generics

let colors = ["red","blue","green"]; // string[]

let colors2 = []; // any[]

let colors3: Array<string> = []; // string[]

// colors3 = ["red","blue",200] // Erreur numbre != string

function identity(arg:number): number {
    return arg;
}
console.log(identity(200));

