import users from "./users.js";
//Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
const getSortedUniqueSkills = (users) => {
  let unique = [];
  users
    .reduce((acc, { skills }) => acc.concat(skills), [])
    .sort()
    .forEach((el) => {
      if (!unique.includes(el)) {
        unique.push(el);
      }
    });
  return unique; //не нашел другого варианта заменить forEach...

  // let totalSkills = [];
  // users.forEach(({ skills }) => totalSkills.push(...skills));
  // totalSkills.sort();
  // let res = [];
  // totalSkills.forEach((el) => {
  //   if (!res.includes(el)) {
  //     res.push(el);
  //   }
  // });
  // return res;
};
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
