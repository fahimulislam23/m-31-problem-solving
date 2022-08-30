// Using for loop
let sum = 0;
for(const arr of array){
    sum = sum + arr;
}
console.log(sum);


// Using reduce() function
const array = [1, 9, 17, 21];
const addArray = array.reduce((first, second) => first + second, 0);
console.log(addArray);