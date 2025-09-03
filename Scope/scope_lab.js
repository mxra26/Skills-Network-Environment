// Глобальная область видимости
var globalVar = "Я глобальная переменная";
let globalLet = "Я также глобальная, но с областью видимости let";
const globalConst = "Я глобальная константа";


{
// Блочная область видимости
var blockVar = "Я переменная с блочной областью видимости";
let blockLet = "Я let с блочной областью видимости";
const blockConst = "Я const с блочной областью видимости";
}
// Глобальная область видимости
console.log(globalVar); // Вывод: "Я глобальная переменная"
console.log(globalLet); // Вывод: "Я тоже глобальная, но с областью видимости let"
console.log(globalConst); // Вывод: "Я глобальная константа"
//Block Scope
// console.log(blockVar);
// console.log(blockLet);
function show(){
    var functionVar = "Я переменная с блочной областью видимости";
    let functionLet = "Я let с блочной областью видимости";
    const functionConst = "Я const с блочной областью видимости";
    }
    show();
    
    console.log(functionVar); // Выдает ReferenceError
    console.log(functionLet); // Выдает ReferenceError
    console.log(functionConst); // Выдает ReferenceError