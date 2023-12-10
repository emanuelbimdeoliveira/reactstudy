
// number and string
let nb: number = 5;
console.log(Math.pow(nb, 5))

let strings: string = "casa"
console.log(strings);

// several types / arrays
const words: string[] = ["dois", "mais strings"]
console.log(words)

const tuple: [string, number, number[]] = ["dois", 32, [98, 78]];
console.log(tuple)

// literals object
let literals: {first: string, second: boolean} = {
    first: "três",
    second: true
}
console.log(literals)

// union and alias types
const twoOrMoreTypes: string | number = 45;
console.log(twoOrMoreTypes);

type typeName = number | boolean;
const aliasType: typeName = true;
console.log(aliasType)

// enum
enum Name {
    a = "Primeiro Nome",
    b = "boolean"
}

const userName: {firstName: string, secondName: string[]} = {
    firstName: Name.a,
    secondName: ["continuação", "do", "nome"]
}
console.log(userName);

// functions
const functionName = (id: string, date?: number[]): string => {
    if (date) return `${id} quando for ${date}`;
    return `${id}`
}
console.log(functionName(Name.a, [45, 98]));
console.log(functionName("usuário"));

// interface
interface NumberTypes {
    n1: number,
    n2: boolean
}
const functionNumbers = (nums: NumberTypes) => {
    return nums.n1;
}
console.log(functionNumbers({n1: 2, n2: false}))

// class
class Car {
    brand
    color

    constructor(brand: string, color: string) {
        this.brand = brand,
        this.color = color
    }

    console() {
        console.log(this.brand)
    }
}

const newCar = new Car("uno", "preto");
newCar.console()

// class with interfaces 
interface ICar {
    created: number,
    used: boolean,
    showUse(): void
}

class Car2 implements ICar {
    created
    used
    constructor (created: number, used: boolean) {
        this.created = created,
        this.used = used
    }
    showUse() {
        console.log(this.used)
    }
}

const car2 = new Car2(1985, true);
car2.showUse()

// generics
function dateOfToday<T> (d: T[]) {
    console.log(d)
}

dateOfToday([4, 5, 3])