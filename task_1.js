// -----------------------задание 1-----------------------------

// Напишите программу, которая работала бы следующим образом: в prompt вводится значение. 
// С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, 
// затем проверить с помощью typeof, принадлежит ли оно к множеству Number.

// Если это число, то вывести в консоль чётное оно или нечётное.
// Если передано не число, выведите: «Упс, кажется, вы ошиблись».
// *NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения.

// -------------вариант - 1----------------

let a = +prompt("Введите значение");
if (a == a) {
if (typeof a == 'number') {
if (a % 2 == 0) {
console.log('число ' + a + '-чётное')
} else {
console.log('число ' + a + '-нечётное')
}}} else {
console.log('Упс, кажется, вы ошиблись')
}

// -------------вариант -2----------------

let a = +prompt("Введите значение");
if (a == a) {
if (typeof a == 'number') {
a % 2 == 0 ? console.log('число ' + a + '-чётное') : console.log('число ' + a + '-нечётное')
}} else {
console.log('Упс, кажется, вы ошиблись')
}


//-------------вариант -3----------------

let a = +prompt("Введите значение");
if (a && 'NaN') {
if (typeof a == 'number') {
a % 2 == 0 ? console.log('число ' + a + '-чётное') : console.log('число ' + a + '-нечётное')
}} else {
console.log('Упс, кажется, вы ошиблись')
}