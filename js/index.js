"use strict";
// 1.1 Для примера с последней части занятия (https://github.com/pecourses/js-intro/blob/main/js/users.js) прописать метод getFullName() (возвращает строку с полным именем) для юзера. Общую логику (т.е. указанный метод) вынести в прототип.

function User(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}
const userProto = new User();
User.prototype = userProto;
const users = [];

for (let i = 0; i < 100; i++) {
  const user = new User(
    `Username${i}`,
    `Usersurname${i}`,
    Math.floor(Math.random() * 90),
    Math.random() > 0.5,
    `useremail${i}@gmail.com`,
    Math.random() > 0.5
  );
  users.push(user);
}

userProto.getFullName = function () {
  return this.firstName + " " + this.lastName;
};
users.forEach((user) => console.log(user.getFullName()));

// 1.2 Получить массив полных имен лиц женского пола школьного возраста (6 - 18 лет).
const schoolkidGirls = users
  .filter(isSchoolkidGirls)
  .map((user) => user.getFullName());

console.table(schoolkidGirls);

function isSchoolkidGirls(user) {
  return !user.isMale && user.age <= 18 && user.age >= 6;
}
// 1.3 Проверить, есть ли среди пользователей пользователь с email`ом useremail99@gmail.com

console.log(
  "Has some one useremail99@gmail.com? :>> ",
  users.some((user) => user.email === "useremail99@gmail.com")
);

// 1.4 Проверить, все ли пользователи подписаны (subscribed).

console.log(
  "Are all users subscribed? :>> ",
  users.every((user) => user.isSubscribed)
);
