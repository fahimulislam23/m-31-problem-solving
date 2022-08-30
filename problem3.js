const people = [
    { name: 'Athir', age: 20},
    { name: 'Afra', age: 15},
    { name: 'Mukta', age: 22},
]

// Using reduce() function
const reduce = people.reduce((age, obj) => age + obj.age, 0);
console.log(reduce);

// Using for loop
let sum = 0;
for(const men of people){
    sum = sum + men.age;
}
console.log(sum);