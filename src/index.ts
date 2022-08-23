//Type Alias
// Creating more employee objects might turn stressfull because of type repeatition. Here type alias comes in

type Employee = {
    readonly id: number;
    name: String;
    retirement: (date: Date) => void;
}


const employee: Employee = {
  id: 3,
  name: "samflash",
  retirement: (date) => console.log(date),
};


// Union Types
// With union types, we can give a varible or function param more than 1 type

function kgToLbs(weight: number | string) : number {
    // Now we'll do Narrowing(creating possible instances for each type)
    if (typeof weight === 'number')
        return weight * 42.3
    else 
        return parseInt(weight) * 32.3
}

