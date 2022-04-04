// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives
let age: number;

age = 12;

let userName: string | string[];
userName = 'grig';

let isInstructor: boolean = true;

// let hobbies: null; //not ok

//More complex types
let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

// ------------------ type aliases
type Person = {
  name: string;
  age: number;
};

// let person: any;
// defining the type for the object
let person: Person;
person = {
  name: 'Grig',
  age: 30,
};

// person = {
//   isEmployee: true,
// };

let people: Person[];

// let people: {
//   name: string;
//   age: number;
// }[];

//--------------------- Type inference
// If you initialize the variable with a value, the TS will assign a type automatically
// let course = 'React - The complete Guide';
// ------------------ Typescript Unions - allowing multiple types for a variable
let course: string | number = 'React - The complete Guide';

course = 12341;

// ------------------ Functions & types

function add3(a: number, b: number): number | string {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// ---------------- Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
// function insertAtBeginning(array: any[], value: any) {
//   const newArray = [value, ...array];
//   return newArray;
// }

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
const startingArray = insertAtBeginning(['asds'], 'dd');
startingArray[0].split('');
// this will not be caught if not using generics
// updatedArray[0].spit('');
