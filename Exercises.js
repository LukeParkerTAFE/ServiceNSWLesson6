// 1 Create a class called Pet
// class Pet {
// }

// 2 Give the class 3 properties called givenName, age and ownerId
// class Pet {
//     givenName;
//     age;
//     ownerId;
// }

// 3 Create a constructor that assigns the 3 properties above
// class Pet {
//     constructor(givenName, age, ownerId) {
//         this.givenName = givenName;
//         this.age = age;
//         this.ownerId = ownerId;
//     }
// }

// let myPet = new Pet("Rex", 2, 12);
// console.log(myPet);

// 4 Create a class called Owner with 3 properties: givenName, familyName and id
// class Owner {
//     givenName;
//     familyName;
//     id;
// }

// console.log(new Owner());

// 5 Create a constructor for the Owner class that assigns the values above.
// class Owner {
//     constructor(givenName, familyName, id) {
//         this.givenName = givenName;
//         this.familyName = familyName;
//         this.id = id;
//     }
// }
// let me = new Owner("Luke", "Parker", 12.4);
// console.log(me.givenName);


// 6 Create a method in the class Owner called getFullName that takes no arguments and returns the full name of the owner

class Owner {
    constructor(givenName, familyName, id) {
        this.givenName = givenName;
        this.familyName = familyName;
        this.id = id;
    }

    getFullName() {
        return `${this.givenName} ${this.familyName}`;
    }
}
// let owners = [
//     new Owner("Luke", "Parker", 12),
//     new Owner("Dan", "Williams", 13),
//     new Owner("Sally", "Jones", 19)
// ];
// for (let i = 0; i < owners.length; i++) {
//     let theOwner = owners[i];
//     console.log(theOwner.getFullName());
// }

// 7 Create a static method in the class Pet called getOwnerById that takes 2 arguments, the first should be a pet object and the second should be an array of owners. The function should return the full name of the owner with an id matching the ownerId of the pet or else return an error message.
class Pet {
    constructor(givenName, age, ownerId) {
        this.givenName = givenName;
        this.age = age;
        this.ownerId = ownerId;
    }

    static getOwnerById(pet, owners){
        // Find owner that has id matching ownerId of pet
        let foundOwner;
        for (let i = 0; i < owners.length; i++) {
            const owner = owners[i];
            if(owner.id === pet.ownerId) {
                foundOwner = owner;
                break;
            }
        }
    
        if(!foundOwner) {
            // Owner was not found
            return "ERROR: Owner not found";
        }
    
        // Call the getFullName method of the owner and return that value
        return foundOwner.getFullName();
    }
}

let owners = [
    new Owner("Luke", "Parker", 12),
    new Owner("Dan", "Williams", 13),
    new Owner("Sally", "Jones", 19)
];

let myPet = new Pet("Rex", 4, 15);

console.log(Pet.getOwnerById(myPet, owners));

// 8 Create a class called Square with a single property, sideLength and create a constructor that assigns that value
