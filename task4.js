let sevenTimesTable = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];

let seventySevenTimesTable = [77, 154, 231, 308, 385, 461, 538, 616, 693, 770];


// Task 4a
const checkMultipleSeven = sevenTimesTable.every( function(num){
    return num%7===0
})

console.log(checkMultipleSeven)

//Task 4b
const checkMultipleSeventySeven = seventySevenTimesTable.every( function(num){
    return num%77===0
})

console.log(checkMultipleSeventySeven)

//Task 4c

const findWrongone = seventySevenTimesTable.find( function(num){
    if(num%77!==0)
    return num
})

console.log(findWrongone)

//Task 4d

const findWrongoneIndex = seventySevenTimesTable.findIndex( function(num){
    if(num%77!==0)
    return num
})

console.log(findWrongoneIndex)



