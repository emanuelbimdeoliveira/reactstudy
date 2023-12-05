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
console.log(functionName("usuário", [45, 98]));
console.log(functionName("usuário"));