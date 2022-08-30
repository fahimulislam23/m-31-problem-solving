// problem-1.1

// Using map() function
const oddArray = [1, 3, 5, 7, 9, 99];
const evenArray = oddArray.map(num => num +1);
console.log(evenArray);

// Using for loop
const evenArray2 = [];
for(num of oddArray){
    evenArray2.push(num + 1);
}
console.log(evenArray2);

// problem - 1.2
const array = [33, 50, 79, 78, 90, 101, 30];
const filterArray = array.filter(num => num % 10 == 0);
console.log(filterArray);

// problem - 1.3
const findArray = array.find(num => num % 10 == 0);
console.log(findArray);