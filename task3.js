let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];
const threeMultiple = someNumbers.some(function(num){
    if( num%3===0){
        return true
    }
})

console.log(threeMultiple)