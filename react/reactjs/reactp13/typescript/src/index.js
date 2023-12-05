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
console.log(functionName("usuário", [45, 98]));
console.log(functionName("usuário"));
