// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

// for (let index = 0; index < 11; index++) {
//     if (index === 0) {
//         console.log('Это ноль');
//     } else if (index % 2 === 0) {
//         console.log(`${index} четное число`);
//     } else {
//         console.log(`${index} нечетное число`);
//     }    
// }

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]
// const arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(3, 2);
// console.log(arr);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3
// const arr = [];
// let min = 0;
// let max = 9;
// let count = 5;

// for (let index = 0; index < count; index++) {
//     arr.push(Math.round(Math.random() * (max - min) + min));    
// }
// console.log(arr);
// let sum = 0;
// for (let index = 0; index < arr.length; index++) {
//     sum += arr[index];     
// }
// let m = Math.min(...arr);
// console.log(`сумма элементов массива ${sum}, минимальное число ${m}`);
// console.log(arr.includes(3));

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только 
// у вашей горки должно быть 20 рядов, а не 5:
let a = 'x'
for (let index = 0; index < 20; index++) {
    console.log(a);
    a = a + 'xx';    
}