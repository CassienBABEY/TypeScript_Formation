/* // Array

let colors: string[] = ['red', 'green', 'blue', 'yellow'];

// ou

let color: Array<string> = ['red', 'green', 'blue', 'yellow'];

let numbers: Array<number> = [1, 2, 3, 4]; // ou number[] 

numbers[0] = 'bonjour'; // error

numbers = ['bonjour']; // error

numbers = [9, true]; // error

numbers.push('bonjour') // <-- erreur invisible sur JS
console.log(numbers)

let values: any[]; // tout types

values = [
    'bonjour',
    true,
    {
        id: 2354523423,
        member: true,
        hobbies: ['peinture', 'sports']
    }
]

let strNumArray = ['red', 9, false]; // inférence de type

strNumArray.push('bonjour');
strNumArray.push(200,29,true, 'hello');
strNumArray[2] = 'Salut';
console.log(strNumArray) */