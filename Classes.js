class Owner {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}


class Person {
    constructor(givenName, familyName, age) {
        this.givenName = givenName;
        this.familyName = familyName;
        this.age = age;
    }

    getFullName() {
        if (this.isEasternName) {
            return `${this.familyName} ${this.givenName}`

        } else {
            return `${this.givenName} ${this.familyName}`
        }
    }

    increaseAge(number) {
        this.age += number;
    }

    getDescription() {
        return this.getFullName() + " is " + this.age + " years old";
    }

    static createPersonFromOwner(owner) {
        return new Person(owner.firstName, owner.lastName, owner.age);
    }
}

let me = new Person("Luke", "Parker", 23);
let you = new Person("Dave", "Williams", 24);

let owners = [
    new Owner("Luke", "Parker", 23),
    new Owner("Dan", "Williams", 23),
    new Owner("Lucy", "Potts", 23),
    new Owner("Owen", "Daniels", 23)
]

let people = owners.map(Person.createPersonFromOwner);
// for (let i = 0; i < owners.length; i++) {
//     const owner = owners[i];
//     people.push(Person.createPersonFromOwner(owner));
//     // people.push(Person(owner.firstName, owner.lastName, owner.age));
// }

console.log(people[0].getFullName());



console.log(people);
