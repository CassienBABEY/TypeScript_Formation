/* // let count1 = 5;
// let count2: never;
// const verfirycases: never = count2;

type AcceptedValues = string | number;

function format(value: AcceptedValues) {
    if (typeof value === "string") {
        return value.length;
    } else if (typeof value === "number") {
        return value.toLocaleString();
    } else {
        const verfirycases: never = value; // TS error <- permet de voir un oubli (un type de valeur oublier etc)
    }
}

function throwError(errMsg): never{
    throw new Error(errMsg); // Stop
}

// const result = throwError('Oups, nous avons un problème!')
// console.log(format(result)); 

function getTotal(arg:number) {
    if (arg<5) {
        return throwError('Attention, le total est < 5!!!');
    } else if(arg === 5) {
        console.log(arg); // pas de return TS Never
    } else {
        return arg + 10; // TS never to number
    }
}

const sayHello = function(textMsg) {
    let i = 0;
    while(i < 5) {

        console.log(textMsg);
        i++;
    }
}

sayHello('Hello World!'); */