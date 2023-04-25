function Component(id:string) {
    return function (target: any){
        const el = document.getElementById(id)!;
        const h1 = document.createElement('h1');

        const objCar = new target("Ford", "rouge");
        h1.innerText = objCar.carDetails();
        el.append(h1);
    }
} 

// function Test(constructor: Function) {
//     console.log(constructor);
// }

@Component("title")
class Car {

    constructor(private n: string, private c: string) {}

        carDetails() {
            return `Marque: ${this.n} | Couleur: ${this.c}`
        }
}

// const ford = new Car("Ford", "rouge")
// console.log(ford.carDetails());