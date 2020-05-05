'use strict';

// a = 5;

// var leftBorderWidth = 1; {
//   let second = 2;
// }
// const pi = 3.14;
// var df;
// console.log(3 / 0);
// console.log('tree' * 5);
// console.log(df);

// let person = {
//   name: "John",
//   age: 23,
//   isMarried: false
// }

// console.log(person.name);
// console.log(person["name"]);

// let arr = ['plum.png', 'orange', 'apple.tmp'];

// console.log(arr[2]);

// alert('Privet.');

// let answer = confirm("Ты еще здесь?");
// console.log(answer);

// let answer = +prompt("Тебе уже есть 18 лет?", 'ДА');
// console.log(answer);

// console.log(typeof (answer));

// console.log("arr" + " - object");
// // console.log(4 + +" - object");

// let incr = 10;
// decr = 10;


// console.log(++incr);
// console.log(decr--);
// console.log(incr++);

// console.log(10 % 7);

// console.log("asw" == "as");

// let isChecked = false;
// isClose = false;

// console.log(isChecked || isClose);

// --------- Задание -----------------

let money = +prompt("Ваш бюджет на месяц?", '');
// console.log(typeof (money));
console.log(money);

let time = prompt("Введите дату в формате YYYY-MM-DD", '');
// console.log(typeof (time));
console.log(time);

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

// console.log(typeof (appData));
// console.log(appData.savings);
// console.log(typeof (appData.savings));

let a = prompt("Введите обязательную статью расходов в этом месяце", '');
let b = +prompt("Во сколько обойдется?", '');
console.log(a);
console.log(b);

appData.expenses[a] = b;

console.log(appData.expenses.a);
console.log(appData.expenses.b);