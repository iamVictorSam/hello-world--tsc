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


// Enums
// Enums are a list of related constants.

const enum Size { Small = 1, Medium, Large, xLarge }
// Under the hood, typescript automatically specify numbers to each enum. eg { Small = 0, Medium = 1, Large = 2, xLarge = 3 } 

const medium = Size.Large

console.log(medium)
//note: ts assigns no.s serially to the rest enums


// function
//When using functions in typescript, always annotate your functions (specify the return type).

const getAddedNum = (param: number): number =>{
   return Math.floor(Math.random() * 9) + param
}

console.log(getAddedNum(3))

const calculateTax = (year: number, tax = 0.2) => {
    if (tax > 0.2)
        return year * tax
    return year * 0.4
}

console.log(calculateTax(2022, 0.1))