// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
function multiply(arr){
   return arr.reduce((acc,c)=>{
       return acc * c
    },1)
}
console.log(multiply([1,2,3,4]))

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed 'age' of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].
function familyAge(ages){
    let sortedAge = []
    sortedAge.push(Math.min(...ages), Math.max(...ages))
    sortedAge.push(sortedAge[1]-sortedAge[0])
    console.log(sortedAge)
}
console.log(familyAge([31,27,62,60]))

// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
// Example:
// [ 6, 2, 1, 8, 10 ] => 16
// [ 1, 1, 11, 2, 3 ] => 6
function sum(num){
    num.sort((a,b) => {return a-b})
    num.shift()
    num.pop()
    return num.reduce((acc,c) => {
       return acc + c
    },0)
}
console.log(sum([6, 2, 1, 8, 10]))