Задание 1. Переключатель цветов
Есть массив цветов в hex-формате и кнопки Start и Stop.
<button type="button" data-action="start">Start</button>
<button type="button" data-action="stop">Stop</button>
const colors = [
'red',
'green',
'violet',
'gray',
'blue',
'yellow',
];

Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.
Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.

const randomIntegerFromInterval = (min, max) => {
return Math.floor(Math.random() \* (max - min + 1) + min);
};

Задание 2.1
Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд. Значением исполнившегося промиса должно быть то кол-во миллисекунд которое передали во время вызова функции delay.
const delay = ms => {
// Твой код
};

const logger = time => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms

Задание 2.2
Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback, а принимала всего два параметра allUsers и userName и возвращала промис.
const users = [
{ name: 'Mango', active: true },
{ name: 'Poly', active: false },
{ name: 'Ajax', active: true },
{ name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName, callback) => {
const updatedUsers = allUsers.map(user =>
user.name === userName ? { ...user, active: !user.active } : user,
);

callback(updatedUsers);
};

const logger = updatedUsers => console.table(updatedUsers);

- Сейчас работает так
  toggleUserState(users, 'Mango', logger);
  toggleUserState(users, 'Lux', logger);
- Должно работать так
  toggleUserState(users, 'Mango').then(logger);
  toggleUserState(users, 'Lux').then(logger);

Задание 2.3
Перепиши функцию makeTransaction() так, чтобы она не использовала callback-функции onSuccess и onError, а принимала всего один параметр transaction и возвращала промис.
const randomIntegerFromInterval = (min, max) => {
return Math.floor(Math.random() \_ (max - min + 1) + min);
};

const makeTransaction = (transaction, onSuccess, onError) => {
const delay = randomIntegerFromInterval(200, 500);

setTimeout(() => {
const canProcess = Math.random() > 0.3;

    if (canProcess) {
      onSuccess(transaction.id, delay);
    } else {
      onError(transaction.id);
    }

}, delay);
};
const logSuccess = (id, time) => {
console.log(`Transaction ${id} processed in ${time}ms`);
};
const logError = id => {
console.warn(`Error processing transaction ${id}. Please try again later.`);
};

- Работает так
  makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
  makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
  makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
  makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
- Должно работать так
  makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
.then(logSuccess)
.catch(logError);

makeTransaction({ id: 72, amount: 75 })
.then(logSuccess)
.catch(logError);

makeTransaction({ id: 73, amount: 100 })
.then(logSuccess)
.catch(logError);

Задание 3. Таймер обратного отсчета
Оформить красиво, сделать в класе (ООП) и это можно прикладывать в резюме.
Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты. Такой плагин может использоваться в блогах и интернет-магазинах, страницах регистрации событий, во время технического обслуживания и т. д.
Плагин ожидает следующую HTML-разметку и показывает четыре цифры: дни, часы, минуты и секунды в формате XX:XX:XX:XX. Количество дней может состоять из более чем двух цифр.

<div class="timer" id="timer-1">
  <div class="field">
    <span class="value" data-value="days">11</span>
    <span class="label">Days</span>
  </div>

  <div class="field">
    <span class="value" data-value="hours">11</span>
    <span class="label">Hours</span>
  </div>

  <div class="field">
    <span class="value" data-value="mins">11</span>
    <span class="label">Minutes</span>
  </div>

  <div class="field">
    <span class="value" data-value="secs">11</span>
    <span class="label">Seconds</span>
  </div>
</div>
