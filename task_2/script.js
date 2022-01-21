/*
Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
*/

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ulRef = document.querySelector("#ingredients");

class List {
  constructor(array, ul) {
    this.array = array;
    this.ul = ul;
  }
  createList = () => {
    this.array.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = item;
      this.ul.appendChild(li);
    });
  };
}

let myList = new List(ingredients, ulRef);
myList.createList();

// const createList = (array, ul) => {
//   array.forEach((item) => {
//     const li = document.createElement("li");
//     li.innerHTML = item;
//     ul.appendChild(li);
//   });
// };
// createList(ingredients, ulRef);
