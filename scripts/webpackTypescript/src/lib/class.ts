export class Persona {
    name: string;
    age: number;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getNmae() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}
