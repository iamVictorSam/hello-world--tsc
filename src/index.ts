//Type Alias
// Creating more employee objects might turn stressfull because of type repeatition. Here type alias comes in

type Employee = {
    readonly id: number;
    name: String;
    retirement: (date: Date) => void;
};

const employee: Employee = {
    id: 3,
    name: "samflash",
    retirement: (date) => console.log(date),
};

// Union Types
// With union types, we can give a varible or function param more than 1 type

function kgToLbs(weight: number | string): number {
    // Now we'll do Narrowing(creating possible instances for each type)
    if (typeof weight === "number") return weight * 42.3;
    else return parseInt(weight) * 32.3;
}

// Intersection type
// When using intersection type, you can make a variable or object possess two types. This is mostly used in objects

// Lets test this out by baking a bread
type Mould = {
    mouldBread: () => void;
};

type Bake = {
    bakeBread: () => void;
};

type ProduceBread = Mould & Bake;

const makeBread: ProduceBread = {
    mouldBread() { },
    bakeBread: () => { },
};

//Note: the produceBread type has properties of both mould and bake

// Listeral type
// string and numbers can be limited to a specific value in ts. 

type Quantity = 20 | 50;

const quatity: Quantity = 50;

const metric: 'cm' | 'in' = 'in'


// Nullable types
// by default, ts is very strict when using null values. but some sometimes, we might wanna output something else if  the input is null.. to acheive this, the nullable type was introduced

const greet = (name: string | null | undefined ) =>{
    if (name)
        console.log(`Hello ${name}`)
    else {
        console.log('Hola')
    }
}

greet('sam')

// Optional chaining

type Customer = {
    birthday?: Date
}

const getCustomers = (id: number): Customer | null | undefined => {
    // Optional property access operation
    return id > 0 ? { birthday: new Date() } : null;
}

const customer = getCustomers(2);

console.log(customer?.birthday?.getFullYear())

// Optional element access operator
// customer?.[0]

// optional call
const log: any = null;
log?.('a')

//this code will only run only if this log is a function