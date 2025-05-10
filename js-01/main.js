// "use strict";

const myPersonalData = {
    name: 'Mikhail',
    age: 24,
    etc: true,
    sayHello(name){
        console.log(`Hello ${name}`)
    }
};
myPersonalData.sayHello(myPersonalData.name);

// =================================================================
const users = [
    {
        name: 'Alex',
        age: 33,
        isAdmin: false,
    },
    {
        name: 'Kolya',
        age: 58,
        isAdmin: true,
    },
    {
        name: 'Max',
        age: 28,
        isAdmin: false,
    },
    {
        name: 'Vanya',
        age: 22,
        isAdmin: false,
    },
    {
        name: 'Bestman',
        age: 24,
        isAdmin: true,
    },
    {
        name: 'Badman',
        age: 8,
        isAdmin: false,
    },
];

let commonUsers = 0;


for(let i = 0; i < users.length; i++){
    if (users[i].isAdmin == 0)
        commonUsers++;
};
console.log('Число обычных пользователей: ', commonUsers );