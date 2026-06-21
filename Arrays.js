//Array
const myArr = [0,1,2,3,4,5]
// indexing start from 0
//another way of declaring Array
const Arr2 = new Array(1,2,3,4)
 
//Methods of Array
myArr.push(6) // add values in array

myArr.pop() // remove last value

myArr.unshift(9)//
myArr.shift()
myArr.includes(9)
const newArr = myArr.join()
// slice , spice
const myn1 = myArr.slice(1,3) // return a section of array
const myn2 = myArr.splice(1,3) // return last value also(index 3) and it manuplate the original Array.