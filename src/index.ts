// Using **any** type
const getAge = (year: any)=>{
    2022 - year 
}

//n.b function parameters requires a type. if you dont want to specify, use the any type


//Arrays
//when declaring arrays in js, if the array is empty it is of **any** type (try avoiding this... if the array is gonna be empty, specify a type for it). But if the array contains numbers or strings, or any other type, it takes the type from the value

const ages: number[] = [];

const names = ['sam', 'victor', 'jess']


//Tuples
//A tuple is a Fixed Length array in Typescript where each element has a type.
const tryTuple: [String, number] = ['sam', 24];

// Try using only 2 values max in your tuple else your code will be messy

console.log(tryTuple)