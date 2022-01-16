// -----------------------задание 8-----------------------------

// Создайте произвольный массив Map. Получите его ключи и 
// выведите в консоль все значения в виде «Ключ — Х, значение — Y».


// -------------вариант - 1----------------

let myMap = new Map();
myMap.set(8, 8);
myMap.set('dark', 'light');
myMap.set(null, 0);
myMap.set(true, true);
myMap.set(NaN, 1);
function run() {
myMap.forEach((value, key) => {
console.log(`ключ -${key}; значение - ${value}`)
})}
run()


// -------------вариант - 2----------------

let myMap = new Map();
myMap.set(8, 8);
myMap.set('dark', 'light');
myMap.set(null, 0);
myMap.set(true, true);
myMap.set(NaN, 1);
function run() {
for (let [key, value] of myMap) {
console.log (`ключ - ${key}; значение - ${value}`)
}}
run()