// Using **any** type
const getAge = (year: any)=>{
    2022 - year 
}

//n.b function parameters requires a type. if you dont want to specify, use the any type


//Arrays
//when declaring arrays in js, if the array is empty it is of **any** type (try avoiding this... if the array is gonna be empty, specify a type for it). But if the array contains numbers or strings, or any other type, it takes the type from the value

const ages: number[] = [];

const names = ['sam', 'victor', 'jess']
