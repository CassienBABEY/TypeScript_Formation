"use strict";
// Abstracts
class Person {
    constructor(name) {
        this.name = name;
    } // On ne peut pas static dans constructeur
    walk() {
        console.log("I walk");
    }
}
class Child extends Person {
    updateName(name) {
        this.name = name;
        console.log(this.name);
    }
}
let Mario = new Child("Mario");
Mario.walk();
Mario.updateName("Maria");
