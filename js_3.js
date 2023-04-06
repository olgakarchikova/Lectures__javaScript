// Задача 1. Написать функцию, кот передает ФИО и возраст и получить строку 
// "ПРивет Иван Петрос с возрастом 17 лет".

// function greet (firstname, surname, age) {
//     return `Привет, ${firstname} ${surname} с возрастом ${age}`;
// }

// Вариант записи стрелочной функции 
const greet = (firstname, surname, age) => `Привет, ${firstname} ${surname} с возрастом ${age}`;
console.log(greet("Павел", "Иванов", 40));
// const username = Павел;
// const usersurname = Иванов;
// const userage = 40;

// Задача 2. Создать функцию кот. возводит число в квадрат.

// function square(number) {
//     return number *= number;
// }

// или стрелочный вариант 

// const square = (number) => number * number;
// console.log(square(7));

// Задача 3.Написать функ., кот. принимает число и говорит + или - число.
function checkNum(number) {
    if (number > 0) {
        return `Число ${number} положительное`;
        // console.log('+++');
    } else if (number < 0) {
        //console.log('---');
        return `Число ${number} отрицательное`;
    }        
}
// checkNum(1);
// еще вариант вызова функции
const a = checkNum(4);
console.log(a);

// Задача 4. Созд. ф., кот., принимает 3 числа и выводит в консоль сумму этих чисел.

// function sumNum(num1, num2, num3) {
//     return num1 + num2 + num3;
// }
// console.log(sumNum(1, 2, 3));

//Задача 5.  С помощью ф., вывести в консоль сумму переменных let param1 = 1, let param2 = 2, let param3 = 3.
// function sumNumbers(num1, num2, num3) {
//     return num1 + num2 + num3;
// }
// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
// console.log(sumNumbers(param1, param2, param3));

// Задача 6. Дана ф. 
// function func(num = 5) {
//     console.log(num * num);
// }
// func(); //25
// func(2); //4

// Задача 7. Сделать ф., кот., принимает число, а возвращает квадратный корень из этого числа.
// function sqRoot(num) {
//     return Math.sqrt(num);
// }
// console.log(sqRoot(3));

// Задача 8. Созд.ф., кот., находит мин число из 2-х передаваемых аргументов функции.
// function minNum(num1, num2) {
//     return Math.min(num1, num2);
// }
// console.log(minNum(-33, 10));

// Задача 9. Созд.ф., кот.приним. параметром число от 1 до 7, а возращает день недели на русском языке.
// function dayWeek(params) {
//     if (params === 1) {
//         console.log('Понедельник');
//     } else if (params === 2) {
//         console.log('Вторник');
//     } else if (params === 3) {
//         console.log('Среда');
//     } else if (params === 4) {
//         console.log('Четверг');
//     } else if (params === 5) {
//         console.log('Пятница');
//     } else if (params === 6) {
//         console.log('Суббота');
//     } else if (params === 7) {
//         console.log('Воскресенье');
//     } 
// }
// console.log(dayWeek(7));

// 2 способ
// function getDay(day) {
//     switch (day) {
//         case 1:
//             return 'Понедельник';
//             break;
//         case 2:
//             return 'Вторник';
//             break;
//         case 3:
//             return 'Среда';
//         break;
//         case 4:
//             return 'Четверг';
//         break;
//         case 5:
//             return 'Пятница';
//         break;
//         case 6:
//             return 'Суббота';
//         break;
//         case 7:
//             return 'Воскресенье';
//         break;
//         default:
//             return 'Error'
//         break;
//     }
// }
// console.log(getDay(10));

// можно решить через ф. Date
// new Date();
// console.dir(new Date());

//Задача 10. Создать ф., кот., перед. имя и она возвращает приветствие в зависимости от времени суток.
function greet(name) {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 6 && hour < 12) {
        return `Доброе утро, ${name}!`;
    } else if (hour >= 12 && hour < 18) {
        return `Доброе день, ${name}!`;
    } else if (hour >= 18 && hour < 24) {
        return `Доброе вечер, ${name}!`;
    } else {
        return `Доброе ночи, ${name}!`;
    }
}
console.log(greet('Ольга'));