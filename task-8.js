import users from "./users.js";

//Массив имен всех пользователей у которых есть друг с указанным именем.
const getUsersWithFriend = (users, friendName) => {
  let findUsers = users.filter(({ name, friends }) =>
    friends.includes(friendName)
  );
  let showUsers = findUsers.map(({ name }) => name);
  return showUsers;
};
console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
