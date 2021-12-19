import users from "./users.js";

//Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
const getNamesSortedByFriendsCount = (users) => {
  let friends = users.map(({ name, friends }) => {
    return { name: name, friends: friends.length };
  });
  let sort = friends.sort((a, b) => a.friends - b.friends);
  let res = sort.map(({ name }) => name);
  return res;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
