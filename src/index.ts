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
