"use strict";
// number and string
let nb = 5;
console.log(Math.pow(nb, 5));
let strings = "casa";
console.log(strings);
// several types / arrays
const words = ["dois", "mais strings"];
console.log(words);
const tuple = ["dois", 32, [98, 78]];
console.log(tuple);
// literals object
let literals = {
    first: "três",
    second: true
};
console.log(literals);
// union and alias types
const twoOrMoreTypes = 45;
console.log(twoOrMoreTypes);
const aliasType = true;
console.log(aliasType);
// enum
var Name;
(function (Name) {
    Name["a"] = "Primeiro Nome";
    Name["b"] = "boolean";
})(Name || (Name = {}));
const userName = {
    firstName: Name.a,
    secondName: ["continuação", "do", "nome"]
};
console.log(userName);
// functions
const functionName = (id, date) => {
    if (date)
        return `${id} quando for ${date}`;
    return `${id}`;
};
console.log(functionName(Name.a, [45, 98]));
console.log(functionName("usuário"));
const functionNumbers = (nums) => {
    return nums.n1;
};
console.log(functionNumbers({ n1: 2, n2: false }));
// class
class Car {
    constructor(brand, color) {
        this.brand = brand,
            this.color = color;
    }
    console() {
        console.log(this.brand);
    }
}
const newCar = new Car("uno", "preto");
newCar.console();
class Car2 {
    constructor(created, used) {
        this.created = created,
            this.used = used;
    }
    showUse() {
        console.log(this.used);
    }
}
const car2 = new Car2(1985, true);
car2.showUse();
// generics
function dateOfToday(d) {
    console.log(d);
}
dateOfToday([4, 5, 3]);
