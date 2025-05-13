let users = [
    {name:"brian", age: 22},
    {name:"jane", age: 20},
    {name: "james", age: 21},
    {name:"brain", age: 22}
];


const userFilter = users.filter(user => {
    return user.age === 22 && user.name === "brian";
});

console.log(userFilter);