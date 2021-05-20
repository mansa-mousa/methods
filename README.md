.map()
copies an array populated with the result of the function it's given to every element
let array = [1,2,3,4]
let newArray = array.map(x => x*x)

.reduce()
It reduces the total value of the array to one value.
const array = [1,2,3,4,5]
const total = array.reduce((currentTotal, item) => { item + currentTotal }, 0 ))

.filter()
Returns a new array with the values resulted from the given function without changing the current array.
const array = [5,20,4,25,50]
const newArray = array.filter((item) => {
item >10
})

.forEach()
Loops over the array, once for each item and executes the given function.
const array = [5,25,50,100,1000]
array.forEach( (item) => {
console.log(item)
})

.sort()
Sorts the elements of an array and returns the sorted array.
const numberArray = [40, 1, 200, 5]
console.log(numberArray.sort((a,b)=>{return a-b}))

.slice()
Extracts the section of a string based on the index supplied and returns it as a new string.
The first parameter indicates the beginning of the cut section and the optional second parameter indicates the end of the section.
A negative parameter will slice backwards from the end of the string.
const string = "The quick red fox jumped over the lazy dog's back."
console.log(string.slice(30))
console.log(string.slice(4, 17))
console.log(string.slice(-5))
console.log(string.slice(-11, -6))

.pop()
It removes the last item from the array.

.shift()
It removes the first item from the array.

.push()
It adds the element to the end of the array. Reverse pop().

.unshift()
It adds the element at the beginning of the array. Reverse shift()

.includes()
Returns true or false whether an array contains a certain value.
const array1 = [1, 2, 3]
const array2 = ['one', 'two', 'three']
console.log(array1.includes(2))

.indexOf()
Returns the index of a substring within a string.
If there is nog match, it returns -1.
const name = "Dwight K. Shrute"
const userSearch = "Shrute"
console.log(name.indexOf(userSearch))

.every()
Tests whether ALL the items in the array pass the test by the provided function. Returns true or false.
const array = [1000, 25, 50, 500]
console.log(array.every((item) => {
item < 1000 
})