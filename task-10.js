import users from "./users.js";
//Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
const getSortedUniqueSkills = (users) => {
  return users
    .reduce((acc, { skills }) => acc.concat(skills), [])
    .sort()
    .filter((el, idx, arr) => idx === arr.indexOf(el));
};
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

//['adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'culpa', 'elit', 'ex', 'ipsum', 'ipsum', 'ipsum', 'irure', 'laborum', 'lorem', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam', 'veniam']
