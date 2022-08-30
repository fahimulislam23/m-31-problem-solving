// problem - 4.1
const student = {
    name: 'Ismail',
    age: 28
}
console.log(student.age);

// prblem - 4.2
let data = {
    location: [
        {
            latitude: '34.5, 37.8',
            longitude: '98.77, 58.7',
            city: 'Dhaka',
            country: 'Bangladesh'
        }
    ]
}

const findCity = data.location[0].city;
console.log(findCity);