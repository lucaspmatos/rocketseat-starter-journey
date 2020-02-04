// Array Operations

const users = [
    { name: 'Diego', age: 23, company: 'Rocketseat' },
    { name: 'Gabriel', age: 15, company: 'Rocketseat' },
    { name: 'Lucas', age: 30, company: 'Facebook' },
];

// 2.1 Utilizando o 'map'
const usersAge = users.map(function (users) {
    return users.age;
});


// 2.2 Utilizando o 'filter'
const filterUsers = users.filter(function (users) {
    return users.age > 18 && users.company === 'Rocketseat';
});


// 2.3 Utilizando o 'find'
const findGoogle = users.find(function (users) {
    return users.company === 'Google';
});


// 2.4 Unindo operações
const doubleAge = users.map(function (users) {
    users.age *= 2;
});

const filterAge = users.filter(function (users) {
    return users.age <= 50;
});

console.log(usersAge);
console.log(filterUsers);
console.log(findGoogle);
console.log(filterAge);