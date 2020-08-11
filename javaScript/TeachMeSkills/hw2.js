
/*let person1 = {
    name: "Hanna",
    age: 25,
    gender: "female",

}

let person2 = {
    name: "Vasya",
    age: 25,
    gender: "male",

}

let person3 = {
    name: "Alex",
    age: 16,
    gender: "male",

}

let person4 = {
    name: "Ira",
    age: 17,
    gender: "female",

}

let person5 = {
    name: "Petr",
    age: 32,
    gender: "male",

}

let personsNameForArmy = [];

if (person1.age > 17 && person1.gender === "male") {
    personsNameForArmy.push(person1.name);  
}
if (person2.age > 17 && person2.gender === "male") {
    personsNameForArmy.push(person2.name);  
}
if (person3.age > 17 && person3.gender === "male") {
    personsNameForArmy.push(person3.name);  
}
if (person4.age > 17 && person4.gender === "male") {
    personsNameForArmy.push(person4.name);  
}
if (person5.age > 17 && person5.gender === "male") {
    personsNameForArmy.push(person5.name);  
}

console.log(personsNameForArmy);*/

let allPersons = [
    {name: "Hanna", age: 25, gender: "female"},
    {name: "Vasya", age: 25, gender: "male"},
    {name: "Alex", age: 16, gender: "male"},
    {name: "Ira", age: 16, gender: "female"},
    {name: "Petr", age: 32, gender: "male"}
];
let personsNameForArmy = [];
let i;
for(i = 0; i < allPersons.length; i ++) {

    if (allPersons[i].age > 17 && allPersons[i].gender === "male") {

        personsNameForArmy.push(allPersons[i].name);    
    } 
}
console.log(personsNameForArmy);
