//Задача 1
// let num1 = 0,
//     num2 = 3;
// if (num1 === 1 ) {
//     console.log(`${num1} равно 1`)
// } else if (num1 < 1) {
//     console.log(`${num1} меньше 1`)
// }
// if (num2 === 3) {
//     console.log(`${num2} равно 3`)
// } else if (num2 > 3) {
//     console.log(`${num2} больше 3`)
// }

//Задача 2
// let test = true;
// console.log((test === true) ? '+++' : '---');

//Задача 3
//1 способ
// let day = 10;
// if (day > 0 && day <= 10) {
//     console.log('1 декада');
// } else if (day > 10 && day <=20) {
//     console.log('2 декада');
// } else if (day > 20 && day <= 31) {
//     console.log('3 декада')
// } else {
//     console.log('число не корректно');
// }

// 2 способ
// let day = 0;
// switch (true) {
//     case day > 0 && day <= 10:
//         console.log('1 декада');
//         break;
//     case day > 10 && day <= 20:
//         console.log('2 декада');
//         break;
//     case day > 20 && day <= 31:
//         console.log('3 декада');
//         break;
//     default:
//         console.log('число не корректно');
//         break;
// }
// Пример:
// Пользователь ввел число 163. Программа должна вывести:
// "В числе 163 количество сотен: 1, десятков: 6, единиц: 3"
// Пример 2:
// Пользователь ввел число 74. Программа должна вывести:
// "В числе 74 количество сотен: 0, десятков: 7, единиц: 4"

// Пример 3:
// Пользователь ввел число 9537. Программа должна вывести:
// "В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

let num = 9537;
let sot = Math.trunc(num / 100) % 10;
let des = Math.trunc(num/10) % 10;
let ed = (num % 10);

console.log(`в числе ${num} количество сотен: ${sot}, десятков: ${des}, единиц: ${ed}`);
