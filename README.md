# Array Methods

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

# String methods

.charAt()
Returns the character at the given index.
const string = "Hello you!"
console.log(string.charAt(0))

.charCodeAt()
Returns the UTF-16 unicode at the given index.
const string = "I think that pretty much sums it up."
console.log(string.charCodeAt(0))

.concat()
Concatenates the string called upon with the string given as parameter.
It takes two parameters, separated by a comma. First parameter is with what the strings are concatenated with (space or comma). Second parameter is the second string that concatenates to the first string.
const con = "The worst thing about prison was"
let cat = "the dementors."
console.log(con.concat(" ", cat)

.includes()
Checks wether a string contains a substring and returns true of false.
const sentence = "The brown fox jumps."
const word = "fox"
console.log(sentence.includes(word))

.indexOf()
Returns the index of a substring within a string.
If there is nog match, it returns -1.
const name = "Dwight K. Shrute"
const userSearch = "Shrute"
console.log(name.indexOf(userSearch))

.match()
Returns an array of matching strings.
const string = "Why are you the way that you are? I hate so much about the things that you choose to be."
console.log(string.match(/[A-Z]/g))

.repeat()
It returns a new string that repeats the string it's called upon the given amount of times in the parentheses.
const lyrics = "Lose yourself to dance. "
console.log( `The lyrics for Daft Punk's Lose Yourself to Dance are: ${lyrics.repeat(100)}`)

.replace()
Returns a string replaced by a replacement string.
It takes two parameters comma separated, first the pattern that needs to be replaced, second the string that you're going to replace it with.
It takes either a string or regex as the pattern.
With the string as replacement, it will only replace the first occurrence.
But with a regex you can globally replace all matches (using the g option).
const string = "Hello world! My name is also world. How funny."
const stringPattern = "world"
const regexPatter = /world/gi
const replacement = "Michael"
console.log(string.replace(stringPattern, replacement)
console.log(string.replace(regexPattern, replacement)

.search()
Checks whether a specific word exist in a string.
let fruits = "Pear, Orange, Apricot, Apple, Mango"
console.log(fruits.toLowerCase( ).search("apple"))

.split()
Takes a separator as the parameter and it returns an array of strings.
const quote = "I'm not superstitious, but I am a little stitious."
const words = quote.split(' ')

.substr()
Returns a part of the string, starting at the specified index till the specified index if given.
It takes two parameters. First the starting index, second (optional) the last index.
const str = "Bob Vance"
console.log(str.substr(4))
console.log(str.substr(0, 2))

.toLowerCase()
Returns a string with all lower case letter.
const string = "size DOES matter."
console.log(string.toLowerCase())

.toUpperCase()
Returns a string with all caps.
const quite = "all caps means yelling on the internet."
const yell = quite.toUpperCase()
console.log(yell)

.trim()
Removes whitespace from the beginning and end of a string.
Useful for user input fields.
const string = "      Can I have a coffee please, black.    "
console.log(string.trim())