

function Test(constructor: Function) {
    console.log(constructor);
}

@Test
class Car {

    constructor(private n: string, private c: string) {}

        carDetails() {
            return `Marque: ${this.n} | Couleur: ${this.c}`
        }
}

const ford = new Car("Ford", "rouge")
console.log(ford.carDetails());