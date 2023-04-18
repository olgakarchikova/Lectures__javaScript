// создать объект с ключами от 1 до 7, в качестве значений содер., дни недели. Вывести на экран 'Вторник'

// задание 2 Создать объект user, вывести на экран ФИО через дефиз
// const user = {
//     name: 'Ольга',
//     surname: 'Иванова',
//     age: '31'
// };
// const resInfo = `${user.surname} ${user.name} - ${user.age}`;
// console.log(resInfo);

// второй способ записи
// function User(name, surname) {
//     this.name = name;
//     this.surname = surname;
// }
// const name = 'Ольга';
// const surname = 'Иванова';

// const person = new User(name, surname);
// console.log(person);

//Даны два массива, первый с названиями дней недели, а втрой с их порядковыми номерами. С помощью цикла создайте объект, ключами кот., будут названия дней, а их значения - номера.
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// const obj = {};
// for (let i = 0; i < arr1.length; i++) {
//     obj[arr1[i]] = arr2[i];     
// }
// console.log(obj);

// Переберите этот объект циклом и возведите каждый эл в квадрат
// const obj = {x:1, y:2, z:3};
// for (let key in obj) {
//     obj[key] = obj[key] ** 2;
// }
// console.log(obj);

// задание 3 Найти сумму элеентов объекта
 const obj = {
    key1: {
        key1:1,
        key2:2,
        key3:3,
    },
    key2: {
        key1:4,
        key2:5,
        key3:6,
    },
    key3: {
        key1:7,
        key2:8,
        key3:9,
    },
 }
//  let sum =0;
//  for(let key in obj) {
//     for(let innerKey in obj[key]) {
//         sum += obj[key][innerKey];
//     }
//  }
//  console.log(sum);

// второй способ

// const values = Object.values(obj);
// const resValues = [].concat(...values.map((el) => Object.values(el))).reduce((acc, val) => acc + val, 0); // метод sprad (...) опускает все скобки, метод concat объединяет
// console.log(resValues);

// третий способ
const values = Object.values(obj);
const resValues = values.reduce((acc, el) => acc.concat(Object.values(el)), []).reduce((acc, val) => acc + val, 0);
console.log(resValues);

// concat - метод объеденения массивов (конкатенации)
// const arr1 = [1, 2, 3];
// const arr2 = [8, 9, 31];
// const res = arr1.concat(arr2);
// console.log(res);

//Задание 4. Созд. объект riddles.
// Добавить св-ва question, answer
// Созд. метод askQuestion кот., спрашивает у пользоват., вопрос questiun и сравнивает ответ с answer
// Если ответил неверно, то в консоль вывод., текст:"вы проиграли" 

const riddles = {
    question: "Зимой и летом одним цветом",
    answer: "елка",
    askQuestion: function () {
        const userAnswer = prompt(this.question);
        if(userAnswer.toLowerCase() === this.answer.toLowerCase()) {
            alert("Молодец");            
        } else {
            alert("Не угадал"); 
            const hint1 = "Это растет в лесу";
            const hint2 = "ЕЕ наряжают на новый год";
            alert(hint1); 
            alert(hint1); 
        }
    }
}
riddles.askQuestion();