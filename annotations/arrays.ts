const carMakers = ['ford','toyota','chevy']
const dates = [new Date(),new Date()]

const carsByMake = [
    ['f150'],['corola'],['camaro']
]

// help with inference wen extracting values
const car = carMakers[0];
const mycar = carMakers.pop()

//prevent incompatible values
carMakers.push('abc')

// help with map
carMakers.map((car : string) : string =>{
    return car.toUpperCase()
})

// flexible types
const importantDates = [new Date(),'2030-10-10']
