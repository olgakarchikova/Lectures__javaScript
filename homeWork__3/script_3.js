// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
// function cubNumber(num1, num2) {
//     return (Math.pow(num1, 3) + Math.pow(num2, 3));
// }
// console.log(cubNumber(2, 3));

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
// function taxPay(pay) {
//     return `Размер заработной платы за вычетом налогов равен ${pay * 0.87}`;
// }

// const userPay = Number(prompt('Введите значение'));
// if (isNaN(pay)) {
//     alert('Значение не верно!');
// } else {
//     alert(`Верно`);
// }

// console.log(taxPay(userPay));

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
// const userNum1 = Number(prompt('Введите первое число'));
// const userNum2 = Number(prompt('Введите второе число'));
// const userNum3 = Number(prompt('Введите третье число'));
// function getMaxNumber(num1, num2, num3) {
//     return Math.max(num1, num2, num3);
// }
// console.log(getMaxNumber(userNum1, userNum2, userNum3));

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление

function sum(num1, num2) {
    return num1 + num2;
}
function sub(num1, num2) {
    if (num1 === num2) {
        return 0;
    } else if (num1 > num2) {
        return num1 - num2;
    } else {
        return num2 - num1;
    }
}

function mult(num1, num2) {
    return num1 * num2;    
}
function div(num1, num2) {
    if (num1 > num2) {
        return num1 / num2;
    } else {
        return num2 / num1;
    }
}

console.log(sum(2,3));
console.log(sub(2,3));
console.log(mult(2,3));
console.log(div(2,3));